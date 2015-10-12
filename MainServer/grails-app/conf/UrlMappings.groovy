class UrlMappings {

	static mappings = {
        "/testanswers"(resources:'TestAnswer' )
        "/assignedcandidates"(resources:'AssignedCandidate' )
        "/assignedproblems"(resources:'AssignedProblem' )
        "/interviews"(resources:'Interview')
        "/"(view:"/index")
        "500"(view:'/error')
	}
}
