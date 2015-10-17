/**
 * Created by tony on 2015/9/21.
 */
Ext.define('MainClient.model.Signin', {
    extend: 'Ext.data.Model',

    fields: [

        { name: 'login',     type: 'string' },
        { name: 'password',  type: 'string' },
        { name: 'activated', type: 'boolean', defaultValue: false},
        { name: 'organizationname', type: 'string', mapping: function(data){ return data.organization.name}},
        { name: 'organizationid', type: 'string', mapping: function(data){ return data.organization.id}}

        /*
        { name: 'phone',    type: 'string' },
        { name: 'gender',   type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'alive',    type: 'boolean', defaultValue: true }
         */
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
        url : 'signin'
    }

});