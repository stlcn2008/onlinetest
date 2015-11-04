package mainserver

/**
 * Created by tony on 2015/9/27.
 */
class Candidate {
    static hasMany = [onlinetests: OnlineTest]
    String firstName;
    String lastName;
    String email;
    String phone;
    String highestDegree;
    int workingYears;

    static constraints = {
        firstName nullable: true
        lastName nullable: true
        phone nullable: true
        highestDegree nullable: true
        workingYears nullable: true
    }

}
