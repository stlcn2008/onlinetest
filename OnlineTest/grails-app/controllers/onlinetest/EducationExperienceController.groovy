package onlinetest

import grails.converters.JSON

class EducationExperienceController extends BaseController<EducationExperience>{

    EducationExperienceController() {
        super(EducationExperience)
    }

    JSON createConvertor(def Object instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(EducationExperience.class, ['class','candidate'])
        convertor
    }

    protected List<WorkExperience> listAllResources(Map params) {
        if (params.candidateid){
            return EducationExperience.findAllByCandidate(Candidate.get(params.candidateid))
        }

        return []
    }

    @Override
    protected EducationExperience createResource() {

        EducationExperience experience = EducationExperience.newInstance()
        bindData experience, getObjectToBind()
        experience.setCandidate(Candidate.get(params.candidateid))
        experience

    }
}
