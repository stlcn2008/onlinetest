package mainserver

import grails.converters.JSON
import grails.rest.RestfulController
import grails.transaction.Transactional
import grails.util.Environment
import org.springframework.http.HttpStatus

class AssignedCandidateController extends BaseController<AssignedCandidate>{

    AssignedCandidateController() {
        super(AssignedCandidate)
    }

    JSON createConvertor(def instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(AssignedCandidate.class, ['class','interview'])
        convertor.setExcludes(Candidate.class, ['class','onlinetests'])
        convertor
    }

    @Override
    protected List<AssignedCandidate> listAllResources(Map params) {
        String interviewId = params.interviewid
        AssignedCandidate.findAllByInterview(Interview.get(interviewId))
    }

    @Override
    protected AssignedCandidate createResource() {

        Candidate candidate = Candidate.newInstance()
        bindData candidate, getObjectToBind()
        candidate.save()

        AssignedCandidate instance = AssignedCandidate.newInstance()
        bindData instance, getObjectToBind()
        instance.setInterview(Interview.get(params.interviewid));
        instance.setCandidate(candidate)
        instance;
    }

    @Override
    @Transactional
    def update() {

            if (params.sendinvitation) {
                AssignedCandidate instance = queryForResource(params.id)
                instance.properties = getObjectToBind()
                instance.save()

                OnlineTest test = new OnlineTest(interview: instance.getInterview(), candidate: instance.getCandidate()).save()
                instance.getInterview().getAssignedProblems().each { assignedProblem ->
                    assignedProblem.getProblem().getCodeTemplates().each { codeTemplate ->
                        new TestAnswer(onlineTest: test, problem: assignedProblem.getProblem(), language: codeTemplate.getLanguage(), code: codeTemplate.getCode(), failed: 0, passed: 0, result: 'success').save()
                    }
                }
                try{
                    def htmlContent = Environment.currentEnvironment == Environment.PRODUCTION ? "<a href=\"http://123.57.212.29:8080/OnlineTest/index.html?onlinetestid=${test.id}\">click the link to take part in your online test</a>" :
                        "<a href=\"http://localhost:8090/OnlineTest/index.html?onlinetestid=${test.id}\">click the link to join your online test</a>"
                    sendMail {
                        to instance.candidate.email
                        subject "online test"
                        html htmlContent
                    }
                } catch (Throwable t) {
                    render message(code: "onlinetest.login.signup.FailedSendMail", args: [instance.candidate.email]), status:HttpStatus.METHOD_FAILURE
                    transactionStatus.setRollbackOnly()
                    return
                }
                def convertor = createConvertor(instance)
                render convertor
            } else {
                super.update()
            }

    }

}
