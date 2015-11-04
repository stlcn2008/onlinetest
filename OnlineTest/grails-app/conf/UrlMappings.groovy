import onlinetest.EducationExperience
import onlinetest.WorkExperience

class UrlMappings {

	static mappings = {
        "/onlinetest"(resources: 'OnlineTest')
        "/educations"(resources: 'EducationExperience')
        "/workexperience"(resources: 'WorkExperience')
        "/candidates"(resources: 'Candidate')
        "/problems"(resources: 'Problem')
        "/testanswers"(resources: 'TestAnswer')
        "/assignedproblems"(resources:'AssignedProblem')
        "/"(view:"/index")
        "500"(view:'/error')

	}
}
