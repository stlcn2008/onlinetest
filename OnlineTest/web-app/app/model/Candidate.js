/**
 * Created by tony on 2015/10/30.
 */
Ext.define('OnlineTestClient.model.Candidate', {
    extend: 'Ext.data.Model',

    fields: [

        { name: 'firstName',     type: 'string' },
        { name: 'lastName',      type: 'string' },
        { name: 'email',    type: 'string' },
        { name: 'phone',   type: 'string' },
        { name: 'highestDegree', type: 'string' },
        { name: 'workingYears',    type: 'int' }

    ],

    proxy: {
        type: 'rest',
        url : 'candidates'
    }
});