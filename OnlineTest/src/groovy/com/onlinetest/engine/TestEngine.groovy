package com.onlinetest.engine

/**
 * Created by tony on 2015/10/19.
 */
interface TestEngine {
    /**
     *
     * @param entry the method name of the solution
     */
    void setEntry(String entry)

    /**
     *
     * @param inputs the inputs of test cases
     * @param inputMetaData the description of the inputs
     * @param output the expected output of each test case
     * @param outputMetaData the description of each test case
     */
    void setTestCases( String[] inputs, String[] inputMetaData, String[] output, String[] outputMetaData)

    /**
     *
     * @param workingDir The directory where the compiled solution is located
     */
    void setWorkingDir(File workingDir)

    /**
     *
     * @param writer the writer to write compile result.
     * @return
     */
    boolean compile(String code, Writer writer)

    Result[] test()
}