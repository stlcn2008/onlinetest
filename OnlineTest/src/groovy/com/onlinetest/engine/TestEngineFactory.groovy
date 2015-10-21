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
        def inputMetaData = []
        def output = []
        def outputMetaData = []
        answer.getProblem().getTestCases().each {
            inputs.add(it.getInput())
            inputMetaData.add(it.getInputMetaData())
            output.add(it.getExpectedOutput())
            outputMetaData.add(it.getExpectedOutputMetaData())
        }

        engine.setTestCases(inputs as String[], inputMetaData as String[], output as String[], outputMetaData as String[])

        String entry = ''
        answer.getProblem().getCodeTemplates().each {
            if(answer.getLanguage() == it.getLanguage()){
                entry = it.getEntry()
            }
        }
        engine.setEntry(entry)
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
