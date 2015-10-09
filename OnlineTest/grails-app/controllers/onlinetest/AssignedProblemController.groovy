package onlinetest

import com.onlinetest.test.Executor
import grails.rest.RestfulController

class AssignedProblemController extends RestfulController{
    static responseFormats = ['json']
    AssignedProblemController(){
        super(AssignedProblem)
    }
    /*
    @Override
    def index() {
        super.index()
    }
    */

    @Override
    def update() {
        if (params.run){
            def problem = createResource();
            render Executor.test(problem);
        } else {
            super.update();
        }

    }
}
