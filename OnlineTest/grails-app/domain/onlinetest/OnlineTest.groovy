package onlinetest

/**
 * Created by tony on 2015/10/4.
 */
class OnlineTest {

    static belongsTo = [interview: Interview, candidate: Candidate]
    static hasMany = [testAnswers: TestAnswer]

    long startTime;
    long endTime;

}
