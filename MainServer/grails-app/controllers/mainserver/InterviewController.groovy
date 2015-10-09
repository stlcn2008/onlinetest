package mainserver

import grails.rest.RestfulController

class InterviewController extends RestfulController{
    static responseFormats = ['json']
    InterviewController() {
        super(Interview)
    }

    @Override
    def index() {
        super.index()
    }


}
