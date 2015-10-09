package onlinetest

/**
 * Created by tony on 2015/9/27.
 */
class Problem {

    static hasMany = [codeTemplates: CodeTemplate, testCases: TestCase, testAnsers: TestAnswer]

    String category;
    String title;
    String description;
    String difficulty;

    static mapping = {
        description type: 'text'
    }

}
