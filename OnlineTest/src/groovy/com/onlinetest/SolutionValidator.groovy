package com.onlinetest

import com.onlinetest.engine.Result
import com.onlinetest.engine.TestEngine
import com.onlinetest.engine.TestEngineFactory
import groovy.json.JsonOutput
import onlinetest.Problem
import onlinetest.TestAnswer

import java.nio.file.Files
import java.nio.file.Path

/**
 * Created by tony on 2015/10/6.
 */
class SolutionValidator {
    static def validate(TestAnswer answer){

        TestEngine engine = TestEngineFactory.newTestEngine(answer)
        ByteArrayOutputStream buffer = new ByteArrayOutputStream()
        Writer resultWriter = new PrintWriter(buffer)
        //Compile the source code
        if(!engine.compile(answer.getCode(), resultWriter)){
            answer.result = JsonOutput.toJson([compile:buffer.toString()])
            return answer
        }

        //Test the solution
        //buffer = new ByteArrayOutputStream()
        //resultWriter = new PrintWriter(buffer)
        Result[] results = engine.test()
        def result = JsonOutput.toJson(results)

        //Generate the test report
        int failed = 0
        int passed = 0
        int exceptions = 0
        for (int i = 0; i < results.length; i++){
        //    resultWriter.println("case ${i}:" )
            if (results[i].failed){
          //      resultWriter.println("Failed: Expected: ${results[i].expected}, Actual: ${results[i].actual}")
                failed ++
            } else if (results[i].exceptional) {
                exceptions ++
            //    resultWriter.println("Exception: ${results[i].message}")
            } else {
                passed ++
              //  resultWriter.println('Passed')
            }

        }
        //resultWriter.flush()
        answer.passed = passed
        answer.failed = failed + exceptions
        //answer.result = "Total cases: ${failed + passed + exceptions} \nFailed: ${failed + exceptions} \n${buffer.toString()}"
        answer.result = result
        answer
    }



    
}
