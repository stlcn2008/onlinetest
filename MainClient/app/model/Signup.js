/**
 * Created by tony on 2015/9/21.
 */
Ext.define('MainClient.model.Signup', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'username',     type: 'string' },
        { name: 'email',   type: 'string' },
        { name: 'password',      type: 'string' },
        { name: 'confirmedPassword',    type: 'string' },
        { name: 'organization', type: 'string' },
    ]

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

    /*
    Uncomment to add a rest proxy that syncs data with the back end.
    proxy: {
        type: 'rest',
        url : '/users'
    }
    */
});