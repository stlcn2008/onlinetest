class UrlMappings {

	static mappings = {
        "/signin"(resources:'SignIn')
        "/signup"(resources:'SignUp')
        "/users"(resources:'User')
        "/testanswers"(resources:'TestAnswer' )
        "/assignedcandidates"(resources:'AssignedCandidate' )
        "/assignedproblems"(resources:'AssignedProblem' )
        "/interviews"(resources:'Interview')
        "/"(view:"/index")
        "500"(view:'/error')
	}
}
