/**
 * Created by tony on 2015/9/22.
 */
Ext.define('MainClient.view.interview.Interviews', {
    extend: 'Ext.panel.Panel',

    xtype: 'positions',

    requires: [
        'Ext.layout.container.Border',
        'Ext.panel.Panel',
        'Ext.tab.Panel',
        'MainClient.view.interview.InterviewCandidates',
        'MainClient.view.interview.InterviewDetails',
        'MainClient.view.interview.InterviewSet',
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
            xtype: 'panel',
            layout: 'border',
            title: onlinetest.main.position.Invitations,
            items: [{
                xtype: 'interviewCandidates',
                reference: 'refCandidateGrid',
                region: 'center',
                bind: {
                    store: '{candidates}'
                }

            }, {
                xtype: 'toolbar',
                region: 'south',
                items: [{
                    text: onlinetest.main.position.Add,
                    handler: 'onAddCandidate',
                    reference: 'refAddCandidate'
                }, {
                    text: onlinetest.main.position.Save,
                    disabled: true,
                    handler: 'onSaveCandidates',
                    reference: 'refSaveCandidate'
                }, {
                    text: onlinetest.main.position.Remove,
                    disabled: true,
                    handler: 'onRemoveCandidate',
                    reference: 'refRemoveCandidate'
                }, {
                    text: onlinetest.main.position.Cancel,
                    disabled: true,
                    handler: 'onCancelCandidate',
                    reference: 'refCancelCandidate'
                }, {
                    text: onlinetest.main.position.SendInvitation,
                    disabled: true,
                    handler: 'onSendInvitation',
                    reference: 'refSendInvitation'
                }]
            }]

        }
        ]

    }],

    afterRender: function() {
        var me = this
        me.callParent(arguments)
/*
        var fromDate = this.getReferences().fromDate.getValue();
        var toDate = Ext.Date.add(this.getReferences().toDate.getValue(), Ext.Date.DAY, 1);
*/
        this.lookupViewModel().getStore('interviews').load({
            params: {
                organizationid: me.getViewModel().get('organizationid')
                /*
                from: fromDate.getTime(),
                to: toDate.getTime()
                */
            }
        });

    }
});