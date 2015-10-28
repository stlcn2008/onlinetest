package mainserver

class Interview {

    static belongsTo = [organization: Organization]

    static hasMany = [assignedProblems: AssignedProblem, assignedCandidates: AssignedCandidate, onlineTests: OnlineTest]

    String title;
    String code;
    String department;
    String description;
    long expireDate;
    String difficulty;
    long createdDate;

    static constraints = {
        description nullable: true
        code nullable: true
        department nullable: true
    }
}
