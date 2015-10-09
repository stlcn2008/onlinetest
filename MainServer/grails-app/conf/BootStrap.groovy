import mainserver.AssignedProblem
import mainserver.Interview
import mainserver.Problem
import mainserver.Candidate
import mainserver.AssignedCandidate
import mainserver.CodeTemplate
import mainserver.TestCase
import mainserver.TestAnswer
import mainserver.OnlineTest
class BootStrap {

    def init = { servletContext ->
/*
        Calendar today = Calendar.getInstance();
        today.add(Calendar.DAY_OF_MONTH, 5);

        new Interview(id: '1', title: 'Junior Java SE', description: 'Online test for Java programer', expireDate: today.getTimeInMillis(), difficulty: 'easy', createdDate: Calendar.getInstance().getTimeInMillis()).save();
        new Interview(id: '2',title: 'Senior Java SE', description: 'Online test for senior Java programer', expireDate: today.getTimeInMillis(), difficulty: 'hard',  createdDate: Calendar.getInstance().getTimeInMillis()).save();


        new Problem(id: '1', title: 'add', description: 'Calculate the sum of two integers', difficulty: 'easy', category: 'algorithm' ).save();
        new Problem(id: '2', title: 'sort', description: 'Sorts a list', difficulty: 'hard', category: 'algorithm').save();

        new TestCase(problem: Problem.get('1'), input: '1, 1', expectedOutput: '2').save();
        new TestCase(problem: Problem.get('1'), input: '2, 3', expectedOutput: '5').save();

        new TestCase(problem: Problem.get('2'), input: '["3", "2", "1"]', expectedOutput: '["1", "2", "3"]').save();
        new TestCase(problem: Problem.get('2'), input: '["6", "5", "7"]', expectedOutput: '["5", "6", "7"]').save();

        new CodeTemplate(problem: Problem.get('1'), language: 'Java', code:'public class Solution { public int add(int a, int b){}}', entryMethod: 'add').save()
        new CodeTemplate(problem: Problem.get('2'), language: 'Java', code:'import java.util.List; \n public class Solution { public List sort(List input){}}', entryMethod: 'sort').save()

        new Candidate(id: '1', firstName: 'Shen', lastName: 'Tony', email: 'stlcn@foxmail.com', invited: false).save();

        new AssignedProblem(id: '1', interview: Interview.get('1'), problem: Problem.get('1')).save();
        new AssignedProblem(id: '2', interview: Interview.get('2'), problem: Problem.get('2')).save();

        new AssignedCandidate(id: '1', interview: Interview.get('1'), candidate: Candidate.get('1')).save();

        new OnlineTest(id: '1', interview: Interview.get('1'), candidate: Candidate.get('1'), startTime: 0, endTime: 0).save();

        new TestAnswer(id: '1', onlineTest: OnlineTest.get('1'), problem: Problem.get('1'), code: 'public class Solution { public int add(int a,  int b){}}', language: 'Java', passed: 0, failed: 0, result: 'success').save()
        new TestAnswer(id: '2', onlineTest: OnlineTest.get('1'), problem: Problem.get('2'), code: 'public class Solution { public String find(List l){}}',language: 'Java', passed: 0, failed: 0, result: 'success').save()
*/
    }
    def destroy = {
    }
}
