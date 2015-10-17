package mainserver

import grails.converters.JSON
import grails.rest.RestfulController

class InterviewController extends BaseController<Interview>{

    InterviewController() {
        super(Interview)
    }

    @Override
    protected List<Interview> listAllResources(Map params) {
        if (params.organizationid && params.from && params.to){
            def interviews = Interview.findAll {
                organization.id == params.organizationid && createdDate >= params.from && createdDate <= params.to
            }
            return interviews
        }

        return []
    }

    protected Interview createResource() {
        Interview instance = Interview.newInstance()
        bindData instance, getObjectToBind()
        instance.setOrganization(Organization.get(params.organizationid))
        instance
    }

    def JSON createConvertor(def instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(Interview.class, ['class','assignedProblems', 'assignedCandidates', 'onlineTests', 'organization'])
        convertor
    }
}
