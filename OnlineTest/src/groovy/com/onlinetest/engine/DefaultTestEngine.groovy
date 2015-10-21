package com.onlinetest.engine

/**
 * Created by tony on 2015/10/20.
 */
abstract class DefaultTestEngine implements TestEngine{

    String entry

    String[] inputs

    String[] inputMetaData

    String[] outputs

    String[] outPutMetaData

    File workingDir

    @Override
    void setEntry(String entry) {
        this.entry = entry
    }

    @Override
    void setTestCases(String[] inputs, String[] inputMetaData, String[] outputs, String[] outputMetaData) {
        this.inputs = inputs
        this.inputMetaData = inputMetaData
        this.outputs = outputs
        this.outPutMetaData = outputMetaData
    }

    @Override
    void setWorkingDir(File workingDir) {
        this.workingDir = workingDir
    }

}
