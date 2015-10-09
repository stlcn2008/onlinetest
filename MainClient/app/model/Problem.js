/**
 * Created by tony on 2015/9/24.
 */
Ext.define('MainClient.model.Problem', {
    extend: 'Ext.data.Model',

    alias: 'model.Problem',

    fields: [
        { name: 'tilte',     type: 'string' },
        { name: 'description',      type: 'string' }

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