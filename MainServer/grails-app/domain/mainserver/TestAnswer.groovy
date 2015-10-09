package mainserver

class TestAnswer {

    static belongsTo = [onlineTest: OnlineTest, problem: Problem]

    String code

    String language

    long passed

    long failed

    String result

    static constraints = {

    }

    static mapping = {
        result type: 'text'
    }
}