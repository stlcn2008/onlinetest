class UrlMappings {

	static mappings = {

        "/problems"(resources: 'Problem')
        "/testanswers"(resources: 'TestAnswer')
        "/assignedproblems"(resources:'AssignedProblem')
        "/books"(resources: 'book')
        "/"(view:"/index")
        "500"(view:'/error')

	}
}
