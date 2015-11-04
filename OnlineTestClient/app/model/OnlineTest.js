/**
 * Created by tony on 2015/11/3.
 */
Ext.define('OnlineTestClient.model.OnlineTest', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    fields: [
        { name: 'startTime',     type: 'date', convert: function(v, record) {var date =  new Date(); date.setTime(v); return date} },
        { name: 'endTime',      type: 'date', convert: function(v, record) {var date =  new Date(); date.setTime(v); return date} },
    ],

    proxy: {
        type: 'rest',
        url : 'onlinetest'
    }
});