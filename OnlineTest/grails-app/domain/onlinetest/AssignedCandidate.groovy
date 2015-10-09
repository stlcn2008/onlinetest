package onlinetest

class AssignedCandidate {

    static transients = ['firstName', 'lastName', 'email' ]
    static belongsTo = [interview: Interview, candidate: Candidate]

    boolean invited;

    String firstName;

    String lastName;

    String email;

    static constraints = {

    }
}
