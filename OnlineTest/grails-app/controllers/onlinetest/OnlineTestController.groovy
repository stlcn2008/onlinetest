package onlinetest

import grails.rest.RestfulController

class OnlineTestController extends RestfulController{

    static responseFormats = ['json']

    OnlineTestController() {
        super(OnlineTest)
    }

    @Override
    def index() {
        super.index()
    }
}
