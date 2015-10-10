/**
 * Created by tony on 2015/9/24.
 */
Ext.define('MainClient.model.Interview', {
    extend: 'Ext.data.Model',

    alias: 'model.Interview',

    fields: [
        { name: 'title',     type: 'string' },
        { name: 'description',      type: 'string' },
        { name: 'expireDate',    type: 'date', convert: function(v, record) {var date =  new Date(); date.setTime(v); return date}, defaultValue: Ext.Date.add(new Date(), Ext.Date.DAY,14)},
        { name: 'difficulty',   type: 'string', defaultValue: 'easy' },
        { name: 'createdDate',   type: 'date', convert: function(v, record) {var date =  new Date(); date.setTime(v); return date}}
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
        url : 'interviews',
        writer: {
            type: 'json',
            dateFormat: 'time'
        }

    }

});