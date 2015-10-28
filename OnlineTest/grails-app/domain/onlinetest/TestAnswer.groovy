package onlinetest

class TestAnswer {

    static belongsTo = [onlineTest: OnlineTest, problem: Problem]

    String code

    String language

    long passed

    long failed

    transient String  result

    boolean submitted

    static constraints = {
        result nullable: true
    }

    static mapping = {
        result type: 'text'
    }
}
