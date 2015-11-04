package onlinetest

import grails.converters.JSON

class WorkExperienceController extends BaseController<WorkExperience>{

    WorkExperienceController() {
        super(WorkExperience)
    }

    JSON createConvertor(def Object instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(WorkExperience.class, ['class','candidate', 'testAnswers'])
        convertor
    }

    protected List<WorkExperience> listAllResources(Map params) {
        if (params.candidateid){
            return WorkExperience.findAllByCandidate(Candidate.get(params.candidateid))
        }

        return []
    }

    @Override
    protected WorkExperience createResource() {

        WorkExperience experience = WorkExperience.newInstance()
        bindData experience, getObjectToBind()
        experience.setCandidate(Candidate.get(params.candidateid))
        experience

    }



}
