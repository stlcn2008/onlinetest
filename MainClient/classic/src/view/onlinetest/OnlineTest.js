/**
 * Created by tony on 2015/10/11.
 */
Ext.define('MainClient.view.onlinetest.OnlineTest', {
    extend: 'Ext.panel.Panel',

    xtype: 'onlinetest',

    requires: [

    ],

    layout: 'border',

    viewModel: 'onlinetest',
    controller:'onlinetest',

    items: [{
        xtype: 'candidateset',
        title: onlinetest.main.onlinetest.Candidates,
        region: 'west',
        width: '30%',
        heitht: '100%',
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