package com.onlinetest.engine

import groovy.json.JsonSlurper

/**
 * Created by tony on 2015/10/20.
 */
abstract class DefaultTestEngine implements TestEngine{

    String entry

    String[] inputs

    String[] outputs

    String testCodeTemplate

    File workingDir

    @Override
    void setTestCodeTemplate(String template){
        this.testCodeTemplate = template
    }

    @Override
    void setEntry(String entry) {
        this.entry = entry
    }

    @Override
    void setTestCases(String[] inputs, String[] outputs) {
        this.inputs = inputs
        this.outputs = outputs
    }

    @Override
    void setWorkingDir(File workingDir) {
        this.workingDir = workingDir
    }

    protected Result[] toResults(String json) {
         def jsonSlurper = new JsonSlurper()
         jsonSlurper.parseText(json) as Result[]
    }

}
