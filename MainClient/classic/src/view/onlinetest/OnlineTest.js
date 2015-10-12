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
        title: 'Candidates',
        region: 'west',
        width: '30%',
        heitht: '100%',
        collapsible: true,
        split: true
    }, {
        xtype: 'onlinetestdetails',
        region: 'center',
        title: 'Online Test'
    }],

    afterRender: function() {

        this.callParent(arguments)

        var fromDate = Ext.Date.subtract(new Date(), Ext.Date.DAY, 30)
        var toDate = new Date()

        this.lookupViewModel().getStore('positions').load({
            params: {
                from: fromDate.getTime(),
                to: toDate.getTime()
            }
        });

    }
});