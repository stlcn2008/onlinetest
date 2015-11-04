/**
 * Created by tony on 2015/10/29.
 */
Ext.define('OnlineTestClient.view.onlinetest.OnlineTest', {
    extend: 'Ext.panel.Panel',

    xtype: 'onlinetest',

    requires: [
        'Ext.layout.container.Border',
        'OnlineTestClient.view.onlinetest.Problem',
        'OnlineTestClient.view.onlinetest.Solution'
    ],

    layout: 'border',

    items: [{
        xtype: 'problem',
        title: onlinetest.main.Problem,
        region: 'west',
        collapsible: true,
        width: '30%',
        split: {
            size: 10
        }
    }, {
        xtype: 'solution',
        title: onlinetest.main.Solution,
        region: 'center'
    }]
});