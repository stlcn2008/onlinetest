package com.onlinetest.engine.java

import com.onlinetest.engine.DefaultTestEngine
import com.onlinetest.engine.Result
import com.sun.tools.javac.Main
import groovy.json.JsonSlurper

import java.lang.reflect.InvocationTargetException
import java.lang.reflect.Method

import static org.hamcrest.CoreMatchers.is
import static org.junit.Assert.assertThat

/**
 * Created by tony on 2015/10/20.
 */
class JavaTestEngine extends DefaultTestEngine{

    static FILENAME = 'Solution'

    @Override
    boolean compile(String code, Writer writer) {
        File sourceFile = new File(workingDir, "${FILENAME}.java")
        if (sourceFile.exists())sourceFile.delete()
        sourceFile << code
        if (Main.compile(["-verbose", sourceFile.toPath()] as String[], writer)){
            return false
        }
        return true
    }

    @Override
    Result[] test() {

        def results = []
        URLClassLoader loader = URLClassLoader.newInstance([getWorkingDir().toURI().toURL()] as URL[], this.class.getClassLoader());
        Class<?> c = loader.loadClass(FILENAME);
        Method[] methods = c.getDeclaredMethods();
        Method target
        for (Method m :  methods){
            if (getEntry().equalsIgnoreCase(m.getName())){
                target = m
            }
        }

        def jsonSlurper = new JsonSlurper()
        for(int i = 0; i < getInputs().length; i ++){
            def input = jsonSlurper.parseText("[${getInputs()[i]}]") as Object[]
            def expectedOutput = jsonSlurper.parseText(getOutputs()[i])
            Object[] arguments = argumentsCompanion(input, target.getParameterTypes())
            Object o
            try {
                o = target.invoke(c.newInstance(), input);
            }catch(InvocationTargetException t) {
                def result = new Result()
                result.exceptional = true
                result.message = t.getTargetException().getMessage()
                results.add(result)
                continue
            }

            try {
                assertThat(o, is(expectedOutput));
            }catch (Error e){
                def result = new Result()
                result.failed = true
                result.expected = getOutputs()[i]
                result.actual = o.toString()
                results.add(result)
                continue
            }

            def result = new Result()
            results.add(result)
        }

        results as Result[]

    }

    private Object[] argumentsCompanion(Object[] input, Class[] types ){
        if (input.length != types.length)
            throw new IllegalArgumentException('The input arguments do not not match the declared parameters');
        for (int i = 0; i < types.length; i ++){
            if (types[i].isAssignableFrom(input[i].class)) {
                continue
            }
            if (types[i].isArray() && input[i].class.is( ArrayList.class)){
                if (types[i].getComponentType().is(int.class)){
                    input[i] = input[i] as int[]
                } else if(types[i].getComponentType().is(String.class)) {
                    input[i] = input[i] as String[]
                }
            }
        }
        input
    }
}
