/**
 * Created by tony on 2015/9/26.
 */
Ext.define('MainClient.model.AssignedCandidate', {
    extend: 'Ext.data.Model',

    alias: 'model.AssignedCandidate',

    fields: [
        { name: 'interviewId', reference: 'Interview' },
        { name: 'candidateId', reference: 'Candidate' },
        { name: 'firstName', type: 'string', mapping: function(data) { return data.candidate.firstName}},
        { name: 'lastName', type: 'string', mapping: function(data) { return data.candidate.lastName}},
        {name: 'invited', type: 'boolean'},
        {name: 'email', type: 'string', mapping: function(data) { return data.candidate.email}}
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
        url : 'assignedcandidates'
    }
});