/**
 * Created by tony on 2015/9/16.
 */
Ext.define('OnlineTestClient.view.main.Problem', {
    extend: 'Ext.panel.Panel',

    xtype: 'problem',

    layout: 'border',

    items: [{
            xtype: 'toolbar',
            region: 'north',
            items:[{
                text: onlinetest.problem.Start,
                handler: 'onStart'
            },{
                text: onlinetest.problem.Complete
            }, '->', {
                    xtype: 'displayfield',
                    fieldLabel: onlinetest.problem.TimeLeft,
                    value: '01:12:30'
            }]

        },{
            xtype: 'panel',
            region: 'center',
            layout: 'border',
            items: [{
                xtype: 'combo',
                region: 'north',
                forceSelection: true,
                editable: false,
                reference: 'refProblems',
                bind:{
                    store: '{problems}'
                },
                queryMode: 'local',
                displayField: 'title',
                valueField: 'id',
                listeners:{
                    change: 'onProblemChange'
                }
            },{
                xtype: 'textarea',
                region: 'center',
                editable: false,
                bind: {
                    value:'{description}'
                }
            }
        ]
    }]
});