/**
 * Created by tony on 2015/10/18.
 */
Ext.define('MainClient.view.home.Notifications', {
    extend: 'Ext.grid.Panel',

    xtype: 'notifications',

    title: onlinetest.main.dashboard.positions.Message,

    rowLines: false,

    hideHeaders: true,

    columns: {
        items: [
            {
                //text: "Message",
                dataIndex: "message",
                width: '100%'
            }
        ]
    },

    store: {
        fields: ['message'],
        data: [
            { message: onlinetest.main.dashboard.message1},
            { message: onlinetest.main.dashboard.message2},
            { message: onlinetest.main.dashboard.message3}
        ]
    }
});