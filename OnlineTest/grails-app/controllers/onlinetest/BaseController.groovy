package onlinetest

import grails.converters.JSON
import grails.rest.RestfulController

abstract class BaseController<T> extends RestfulController<T>{

    static responseFormats = ['json']

    BaseController(Class<T> resource){
        super(resource)
    }

    abstract JSON createConvertor(def instances)

    @Override
    def index() {
        def convertor = createConvertor(listAllResources(params))
        render convertor
    }

    @Override
    def save() {
        def instance = createResource()
        instance.save flush: true
        def convertor = createConvertor(instance)
        render convertor
    }

    @Override
    def update() {

        T instance = queryForResource(params.id)
        instance.properties = getObjectToBind()
        instance.save flush: true
        def convertor = createConvertor(instance)
        render convertor
    }
}
