/**
 * Created by tony on 2015/10/29.
 */
Ext.define('OnlineTestClient.model.WorkExperience', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    fields: [

        { name: 'company',     type: 'string' },
        { name: 'title',   type: 'string' },
        { name: 'start',      type: 'date', convert: function(v, record) {var date =  new Date(); date.setTime(v); return date},defaultValue: new Date(0)},
        { name: 'end',    type: 'date', convert: function(v, record) {var date =  new Date(); date.setTime(v); return date},defaultValue: new Date(0) },
        { name: 'responsibility', type: 'string' }

    ],

    proxy: {
        type: 'rest',
        url : 'workexperience',
        writer: {
            type: 'json',
            dateFormat: 'time'
        }
    }

});