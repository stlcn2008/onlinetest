package onlinetest

/**
 * Created by tony on 2015/9/27.
 */
class Candidate {
    static hasMany = [onlinetests: OnlineTest]
    String firstName;
    String lastName;
    String email;
}
