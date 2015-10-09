package com.onlinetest.testcase;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameter;
import org.junit.runners.Parameterized.Parameters;
@RunWith(Parameterized.class)
public class BaseTestCase {

	private static List<Object[]> a= new ArrayList<Object[]>();
	/*
	new Object[][]{
	    {2, {1, 1}},
	    {3, {2, 1}}
	};
	*/
	
	private static List<Object[]> l = new ArrayList<Object[]>();
	
	/*
	{{new ArrayList<Integer>(), new ArrayList<Integer>()}};
	*/
	static {
		
		Object[] input = new Object[]{1, 1};
		a.add(new Object[]{2, input});
		input = new Object[]{2, 1};
		a.add(new Object[]{3, input});
		
		l.add(new Object[]{new ArrayList<Integer>(), new Object[]{new ArrayList<Integer>()}});
	}

	@Parameters
    public static Collection<Object[]> data() {
        if (testID.equalsIgnoreCase("1")){
			return a;
		} else if (testID.equalsIgnoreCase("2")){
			return l;
		}
        return null;
    }
	
    @Parameter(value = 1)
    public Object[] input;
    
    @Parameter 
    public Object expectedOutput;
	
	public static String testID;
	
	public static String clazz;
	
	public static String method;
	
	
	@Test 
	public void test() throws ClassNotFoundException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException, MalformedURLException {
		URLClassLoader loader = URLClassLoader.newInstance(new URL[]{new URL("file:/E:/temp/")}, BaseTestCase.class.getClassLoader());
		Class<?> c = loader.loadClass(clazz);
		Method[] methods = c.getDeclaredMethods();
		for (Method m :  methods){
			if (method.equalsIgnoreCase(m.getName())){
				Object o = m.invoke(c.newInstance(), input);
				System.out.print(o);
			}
		}
	}

}
