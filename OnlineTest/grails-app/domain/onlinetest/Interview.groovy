package onlinetest

class Interview {

    static hasMany = [assignedProblems: AssignedProblem, assignedCandidates: AssignedCandidate, onlineTests: OnlineTest]

    String title;
    String description;
    long expireDate;
    String difficulty;
    long createdDate;

    static constraints = {
        description nullable: true
    }
}
