package mainserver

/**
 * Created by tony on 2015/10/4.
 */
class CodeTemplate {

    static belongsTo = [problem: Problem]

    String language;
    String entry;
    String code;
}
