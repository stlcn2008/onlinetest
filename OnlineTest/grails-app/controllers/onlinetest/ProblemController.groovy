package onlinetest

import grails.rest.RestfulController

class ProblemController extends RestfulController{

    static responseFormats = ['json']
    ProblemController() {
        super(Problem)
    }

    @Override
    protected List<Problem> listAllResources(Map params) {
        if (params.onlinetestid) {
            return OnlineTest.get(params.onlinetestid).getInterview().getAssignedProblems().collect {
                it.getProblem()
            }
        }
    }
}
