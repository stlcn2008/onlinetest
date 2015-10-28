/**
 * Created by tony on 2015/9/24.
 */
Ext.define('MainClient.view.interview.InterviewsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.interviews',

    requires: [
        'MainClient.model.AssignedProblem',
        'MainClient.model.AssignedCandidate',
        'MainClient.model.Interview'


    ],

    stores: {
        interviews: {
            autoLoad: false,
            model: 'MainClient.model.Interview',

            data: [
                {
                    id: '1',
                    title: 'Inteview 1',
                    description: 'Implement c++',
                    difficulty: 'easy',
                    expiredate: Ext.Date.add(new Date(), Ext.Date.DAY, 5)
                },
                {
                    id: '2',
                    title: 'Inteview 2',
                    description: 'Implement Java',
                    difficulty: 'hard',
                    expiredate: Ext.Date.add(new Date(), Ext.Date.DAY, 3)
                }
            ]

        },

        problems: {
            autoLoad: false,
            model: 'MainClient.model.AssignedProblem',
            /*
            data:[{
            id: '1',
            problemId: '1',
            title: 'Reverse a string',
            description: 'Give a string and make the characters in reversed order.'}]
            */
        },

        candidates: {
            autoLoad: false,
            model: 'MainClient.model.AssignedCandidate',
            /*
            data:[{
                id: '2',
                candidateId: '1',
                firstName: 'Shen',
                lastName: 'Tony',
                email: 'stlcn@hotmail.com',
                invited: false
            }]
            */
        },

    },

    data: {

    }
});