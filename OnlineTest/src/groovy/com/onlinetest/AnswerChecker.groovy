package com.onlinetest

import com.onlinetest.testcase.BaseTestCase
import com.sun.tools.javac.Main
import onlinetest.Problem
import onlinetest.TestAnswer
import org.junit.internal.TextListener
import org.junit.runner.JUnitCore
import org.junit.runner.Result

import java.lang.reflect.Array

/**
 * Created by tony on 2015/10/6.
 */
class AnswerChecker {
    static def check(TestAnswer answer){
        ByteArrayOutputStream buffer = new ByteArrayOutputStream();

        if ('C'== answer.getLanguage()){
            answer.result = 'Not supported now, comming soon...'
            return answer
        }

        try {
            def dir = "c:/temp/${answer.onlineTest.getId()}/${answer.getId()}"
            File sourceDir = new File(dir)
            sourceDir.mkdirs()
            File sourceFile = new File(sourceDir, "Solution.java")
            if (sourceFile.exists())sourceFile.delete()
            sourceFile << answer.getCode()
            Main.compile(["-verbose", sourceFile.toPath()] as String[], new PrintWriter(buffer));
            URLClassLoader loader = URLClassLoader.newInstance([sourceDir.toURI().toURL()] as URL[], TestCaseCollection.class.getClassLoader());
            Class<?> c = loader.loadClass('Solution');

            JUnitCore core = new JUnitCore();
            core.addListener(new TextListener(new PrintStream(buffer)));

            TestCaseCollection.setProblem(getProblem(answer));
            TestCaseCollection.setClassUnderTest(c);
            def result = core.run(TestCaseCollection.class);
            answer.failed = result.failureCount
            answer.passed = result.runCount - result.failureCount

        } catch (Exception e) {
            new PrintWriter(buffer).print(e.getMessage());
        }
        answer.result = buffer.toString();
        answer
    }

    static Problem getProblem(TestAnswer answer) {
        def tempAnswer = TestAnswer.get(answer.getId())
        tempAnswer.problem
    }

    
}
