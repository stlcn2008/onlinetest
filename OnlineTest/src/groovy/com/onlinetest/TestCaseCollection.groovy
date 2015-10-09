package com.onlinetest

import groovy.json.JsonSlurper
import onlinetest.CodeTemplate
import onlinetest.Problem
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized

import java.lang.reflect.Array

import static org.hamcrest.CoreMatchers.*
import java.lang.reflect.InvocationTargetException
import java.lang.reflect.Method
import static org.junit.Assert.assertThat

/**
 * Created by tony on 2015/10/6.
 */
@RunWith(Parameterized.class)
class TestCaseCollection {

    private static ThreadLocal<Problem> problem = new ThreadLocal<Problem>();

    private static ThreadLocal<Class> classUnderTest = new ThreadLocal<Class>();

    public static setProblem(Problem problemToBeAnswered) {
        problem.set(problemToBeAnswered)
    }


    public static setClassUnderTest(Class clazz){
        classUnderTest.set(clazz)
    }
    @Parameterized.Parameter(value = 1)
    public def input;

    @Parameterized.Parameter
    public def expectedOutput;

    @Parameterized.Parameters
    public static def data() {
        def jsonSlurper = new JsonSlurper()
        problem.get().testCases.collect {
            [jsonSlurper.parseText(it.expectedOutput), jsonSlurper.parseText("[${it.input}]") as Object[]] as Object[]
        }
    }

    @Test
    public void test() throws ClassNotFoundException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException, MalformedURLException {
        String method = getEntryMethod();
        Class c = classUnderTest.get();
        Method[] methods = c.getDeclaredMethods();
        for (Method m :  methods){
            if (method.equalsIgnoreCase(m.getName())){
                Object o = m.invoke(c.newInstance(), argumentsCompanion(input, m.getParameterTypes()));
                assertThat(o, is(expectedOutput));
            }
        }
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

    private String getEntryMethod() {
        Problem p = problem.get();
        CodeTemplate.findByProblemAndLanguage(p, 'Java').getEntry()
    }

}
