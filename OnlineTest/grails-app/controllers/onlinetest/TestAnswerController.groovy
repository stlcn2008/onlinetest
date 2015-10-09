package onlinetest

import com.onlinetest.AnswerChecker
import grails.converters.JSON
import grails.rest.RestfulController

class TestAnswerController extends RestfulController{

    static responseFormats = ['json']
    TestAnswerController() {
        super(TestAnswer)
    }

    @Override
    def update() {
        if (params.run){
            TestAnswer instance = queryForResource(params.id)
            instance.properties = getObjectToBind()
            render AnswerChecker.check(instance) as JSON;
        } else {
            super.update();
        }

    }

    @Override
    protected List<TestAnswer> listAllResources(Map params) {
        if (params.onlinetestid && params.language && params.problemid){
           return TestAnswer.findAllByOnlineTestAndProblemAndLanguage(OnlineTest.get(params.onlinetestid), Problem.get(params.problemid), params.language)
        }
    }
}
