package onlinetest

import com.onlinetest.AnswerChecker
import grails.converters.JSON
import grails.rest.RestfulController

class TestAnswerController extends BaseController<TestAnswer>{

    static responseFormats = ['json']
    TestAnswerController() {
        super(TestAnswer)
    }

    JSON createConvertor(def Object instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(TestAnswer.class, ['class','onlineTest','problem'])
        convertor
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
