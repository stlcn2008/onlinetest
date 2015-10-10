package onlinetest

class TestAnswer {

    static belongsTo = [onlineTest: OnlineTest, problem: Problem]

    String code

    String language

    long passed

    long failed

    String result

    static constraints = {
        result nullable: true
    }

    static mapping = {
        result type: 'text'
    }
}
