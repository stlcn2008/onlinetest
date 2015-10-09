package mainserver

import grails.converters.JSON
import grails.rest.RestfulController
import org.apache.commons.logging.LogFactory

class AssignedProblemController extends RestfulController{
    private static final log = LogFactory.getLog(this)
    static responseFormats = ['json']
    AssignedProblemController() {
        super(AssignedProblem)
    }
    @Override
    def index() {
        super.index()
    }

    @Override
    protected List<AssignedProblem> listAllResources(Map params) {
        if(params.interviewid) {
            return AssignedProblem.findAllByInterview(Interview.get(params.interviewid))
        }

        if(params.difficulty){
            int count = Problem.where {
                difficulty == params.difficulty
            }.count()
            def problems = Problem.findAllByDifficulty(params.difficulty, [max: 3, offset:new Random().nextInt(count>2? count - 2 : 1) , sort: "title", order: "desc"])
            problems.collect {
                new AssignedProblem(problem: it);
            }

        }

    }

    @Override
    protected AssignedProblem createResource() {
        AssignedProblem instance = super.createResource();
        instance.setInterview(Interview.get(params.interviewid));
        instance;
    }
}
