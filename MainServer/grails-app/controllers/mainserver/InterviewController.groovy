package mainserver

import grails.converters.JSON
import grails.rest.RestfulController

class InterviewController extends BaseController<Interview>{

    InterviewController() {
        super(Interview)
    }

    def JSON createConvertor(def instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(Interview.class, ['class','assignedProblems', 'assignedCandidates', 'onlineTests'])
        convertor
    }


}
