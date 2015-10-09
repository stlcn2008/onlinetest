package com.onlinetest.test;

import com.onlinetest.testcase.BaseTestCase;
import com.sun.tools.javac.Main;
import onlinetest.TestAnswer;
import org.apache.tools.ant.taskdefs.optional.junit.BaseTest;
import org.junit.internal.TextListener;
import org.junit.runner.JUnitCore;

import java.io.*;

/**
 * Created by tony on 2015/9/18.
 */
public class Executor {
    public static String test(TestAnswer answer){

        ByteArrayOutputStream buffer = new ByteArrayOutputStream();
        try {
            PrintWriter sourceWriter = new PrintWriter(new File("e:\\temp", "Solution.java"));
            sourceWriter.print(answer.getCode());
            sourceWriter.flush();
            Main.compile(new String[]{"-verbose", "e:\\temp\\Solution.java"}, new PrintWriter(buffer));

            BaseTestCase.clazz = "Solution";
            BaseTestCase.method = "add";
            BaseTestCase.testID = "1";
            JUnitCore core = new JUnitCore();
            core.addListener(new TextListener(new PrintStream(buffer)));
            core.run(BaseTestCase.class);


        }catch (Exception e) {
            new PrintWriter(buffer).print(e.getMessage());
        }

        return buffer.toString();
    }
}

