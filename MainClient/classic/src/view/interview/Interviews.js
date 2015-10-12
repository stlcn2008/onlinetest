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
        title: 'Positions',
        region: 'west',
        width: '30%',
        collapsible: true,
        split: true
    }, {
        xtype: 'tabpanel',
        region: 'center',
        items: [{
            xtype: 'interviewdetails',
            title: 'Details'
        },{
            xtype: 'interviewCandidates',
            title: 'Invitations',
            bind: {
                store: '{candidates}'
            }
        }
        ]

    }],

    afterRender: function() {

        this.callParent(arguments)

        var fromDate = this.getReferences().fromDate.getValue();
        var toDate = this.getReferences().toDate.getValue();
        console.log('From:' + fromDate);
        this.lookupViewModel().getStore('interviews').load({
            params: {
                from: fromDate.getTime(),
                to: toDate.getTime()
            }
        });

    }
});