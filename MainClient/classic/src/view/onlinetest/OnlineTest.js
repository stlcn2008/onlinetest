/**
 * Created by tony on 2015/10/11.
 */
Ext.define('MainClient.view.onlinetest.OnlineTest', {
    extend: 'Ext.panel.Panel',

    xtype: 'onlinetest',

    requires: [
        'Ext.layout.container.Border',
        'MainClient.view.onlinetest.CandidateSet',
        'MainClient.view.onlinetest.OnlineTestController',
        'MainClient.view.onlinetest.OnlineTestDetails',
        'MainClient.view.onlinetest.OnlineTestModel'
    ],

    layout: 'border',

    viewModel: 'onlinetest',
    controller:'onlinetest',

    items: [{
        xtype: 'candidateset',
        title: onlinetest.main.onlinetest.Candidates,
        region: 'west',
        width: '30%',
        height: '100%',
        collapsible: true,
        split: true
    }, {
        xtype: 'onlinetestdetails',
        region: 'center',
        title: onlinetest.main.onlinetest.TestResult
    }],

    afterRender: function() {
        var me = this;
        me.callParent(arguments)

        var fromDate = Ext.Date.subtract(new Date(), Ext.Date.DAY, 30)
        var toDate = new Date()

        me.lookupViewModel().getStore('positions').load({
            params: {
                organizationid: me.getViewModel().get('organizationid'),
                from: fromDate.getTime(),
                to: toDate.getTime()
            }
        });

    }
});