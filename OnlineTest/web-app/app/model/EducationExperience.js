/**
 * Created by tony on 2015/10/29.
 */
Ext.define('OnlineTestClient.model.EducationExperience', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    fields: [
        { name: 'school',     type: 'string' },
        { name: 'major',   type: 'string' },
        { name: 'degree',   type: 'string' },
        { name: 'start',      type: 'date', convert: function(v, record) {var date =  new Date(); date.setTime(v); return date}, defaultValue: new Date(0) },
        { name: 'end',    type: 'date', convert: function(v, record) {var date =  new Date(); date.setTime(v); return date}, defaultValue: new Date(0)},
    ],


    proxy: {
        type: 'rest',
        url : 'educations',
        writer: {
            type: 'json',
            dateFormat: 'time'
        }
    }

});