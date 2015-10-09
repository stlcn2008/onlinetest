/**
 * Created by tony on 2015/9/26.
 */
Ext.define('MainClient.model.AssignedProblem', {
    extend: 'Ext.data.Model',

    alias: 'model.AssignedProblem',

    fields: [
        { name: 'interview', reference: 'Interview'},
        { name: 'problem', reference: 'Problem'},
        { name: 'title', type: 'string', mapping: function(data){ return data.problem.title}},
        { name: 'description', type: 'string', mapping: function(data){ return data.problem.description}}
        
    ],

    /*
    Uncomment to add validation rules
    validators: {
        age: 'presence',
        name: { type: 'length', min: 2 },
        gender: { type: 'inclusion', list: ['Male', 'Female'] },
        username: [
            { type: 'exclusion', list: ['Admin', 'Operator'] },
            { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
        ]
    }
    */


    proxy: {
        type: 'rest',
        url : 'assignedproblems'
    }
});