/**
 * Created by tony on 2015/10/4.
 */
Ext.define('OnlineTestClient.model.TestAnswer', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'language',    type: 'string' , defaultValue: 'Java'},
        { name: 'code',   type: 'string' },
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
        url : 'testanswers',
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }

});