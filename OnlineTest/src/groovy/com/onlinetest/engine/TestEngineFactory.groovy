package com.onlinetest.engine

import com.onlinetest.engine.java.JavaTestEngine

/**
 * Created by tony on 2015/10/19.
 */
class TestEngineFactory {

    private TestEngineFactory() {}
    static TestEngine newTestEngine(def answer) {

        TestEngine engine = createTestEngine(answer.getLanguage());

        String userDir = System.getProperty('user.dir')

        def dir = "${userDir}/onlinetest/${answer.onlineTest.getId()}/${answer.getId()}"
        File workingDir = new File(dir)
        workingDir.mkdirs()
        engine.setWorkingDir(workingDir)

        def inputs = []
        def output = []
        answer.getProblem().getTestCases().each {
            inputs.add(it.getInput())
            output.add(it.getExpectedOutput())
        }

        engine.setTestCases(inputs as String[], output as String[])

        String entry = ''
        String testCodeTemplate = ''
        answer.getProblem().getCodeTemplates().each {
            if(answer.getLanguage() == it.getLanguage()){
                entry = it.getEntry()
                testCodeTemplate = it.getTestCodeTemplate()
            }
        }
        engine.setEntry(entry)
        engine.setTestCodeTemplate(testCodeTemplate)
        engine
    }

    /**
     * Register differenct test engine in this method.
     * @param language
     * @return
     */
    private static TestEngine createTestEngine(String language) {
        if ('Java' == language) {
            return new JavaTestEngine()
        }
    }

}
