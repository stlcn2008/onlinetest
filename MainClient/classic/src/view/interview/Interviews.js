/**
 * Created by tony on 2015/9/22.
 */
Ext.define('MainClient.view.interview.Interviews', {
    extend: 'Ext.panel.Panel',

    xtype: 'positions',

    requires: [
        'MainClient.view.interview.InterviewsController',
        'MainClient.view.interview.InterviewsViewModel'
    ],

    layout: 'border',

    viewModel: 'interviews',
    controller:'interviews',

    items: [{
        xtype: 'interviewset',
        title: onlinetest.main.Positions,
        region: 'west',
        width: '30%',
        collapsible: true,
        split: true
    }, {
        xtype: 'tabpanel',
        region: 'center',
        items: [{
            xtype: 'interviewdetails',
            title: onlinetest.main.position.Details
        },{
            xtype: 'interviewCandidates',
            title: onlinetest.main.position.Invitations,
            bind: {
                store: '{candidates}'
            }
        }
        ]

    }],

    afterRender: function() {
        var me = this
        me.callParent(arguments)

        var fromDate = this.getReferences().fromDate.getValue();
        var toDate = Ext.Date.add(this.getReferences().toDate.getValue(), Ext.Date.DAY, 1);

        this.lookupViewModel().getStore('interviews').load({
            params: {
                organizationid: me.getViewModel().get('organizationid'),
                from: fromDate.getTime(),
                to: toDate.getTime()
            }
        });

    }
});