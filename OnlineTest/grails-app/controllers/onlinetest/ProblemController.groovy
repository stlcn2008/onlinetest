package onlinetest

import grails.converters.JSON
import grails.rest.RestfulController

class ProblemController extends BaseController<Problem>{

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

    JSON createConvertor(def Object instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(Problem.class, ['class','codeTemplates','testCases','testAnsers'])
        convertor
    }
}
