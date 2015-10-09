package onlinetest

/**
 * Created by tony on 2015/9/27.
 */
class AssignedProblem {

    static transients = ['title', 'description']
    static belongsTo = [interview: Interview, problem: Problem]
}
