package onlinetest

import grails.converters.JSON

class CandidateController extends BaseController{

    CandidateController() {
        super(Candidate)
    }

    JSON createConvertor(def Object instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(Candidate.class, ['class','onlinetests'])
        convertor
    }

    @Override
    def index() {
        if(params.onlinetestid){
            def onlinetest = OnlineTest.get(params.onlinetestid)
            render onlinetest.getCandidate() as JSON
            return
        }
    }


}
