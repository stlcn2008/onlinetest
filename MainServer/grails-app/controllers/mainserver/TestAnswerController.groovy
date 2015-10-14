package mainserver

import grails.converters.JSON

class TestAnswerController extends BaseController<TestAnswer>{

    TestAnswerController() {
        super(TestAnswer)
    }

    JSON createConvertor(def Object instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(TestAnswer.class, ['class','onlineTest','problem'])
        convertor
    }

    @Override
    protected List<TestAnswer> listAllResources(Map params) {
        if (params.assignedproblemid && params.assignedcandidateid){
            def interview = AssignedProblem.get(params.assignedproblemid).getInterview()
            def problem = AssignedProblem.get(params.assignedproblemid).getProblem()
            def candidate = AssignedCandidate.get(params.assignedcandidateid).getCandidate()
            def onlineTest = OnlineTest.findByInterviewAndCandidate(interview, candidate)
            return TestAnswer.findAllByOnlineTestAndProblemAndSubmitted(onlineTest, problem, true)
        }
    }
}
