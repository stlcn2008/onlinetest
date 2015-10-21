package onlinetest

class TestCase {

    static belongsTo = [problem: Problem]

    String input

    String expectedOutput

    static constraints = {
    }
}
