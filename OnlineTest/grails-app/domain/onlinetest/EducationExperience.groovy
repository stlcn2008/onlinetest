package onlinetest

class EducationExperience {

    static belongsTo = [candidate: Candidate]

    String school

    String major

    long start

    long end

    String degree

    static constraints = {
        major nullable: true
        degree nullable: true
    }
}
