package onlinetest

class WorkExperience {

    static belongsTo = [candidate: Candidate]

    String company

    String title

    long start

    long end

    static constraints = {
        title nullable: true
    }
}
