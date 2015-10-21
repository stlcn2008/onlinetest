package onlinetest

class TestCase {

    static belongsTo = [problem: Problem]

    String input

    String inputMetaData

    String expectedOutput

    String expectedOutputMetaData

    static constraints = {
    }
}
