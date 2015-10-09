class UrlMappings {

	static mappings = {
        "/assignedcandidates"(resources:'AssignedCandidate' )
        "/assignedproblems"(resources:'AssignedProblem' )
        "/interviews"(resources:'Interview')
        "/"(view:"/index")
        "500"(view:'/error')
	}
}
