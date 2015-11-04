package onlinetest

import grails.converters.JSON

class OnlineTestController extends BaseController{

    OnlineTestController() {
        super(OnlineTest)
    }

    JSON createConvertor(def Object instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(EducationExperience.class, ['class','candidate', 'testAnswers'])
        convertor
    }

    @Override
    def index() {

    }
}
