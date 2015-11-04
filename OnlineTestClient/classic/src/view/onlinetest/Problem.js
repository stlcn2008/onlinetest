/**
 * Created by tony on 2015/9/16.
 */
Ext.define('OnlineTestClient.view.onlinetest.Problem', {
    extend: 'Ext.panel.Panel',

    xtype: 'problem',

    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Ext.layout.container.Border',
        'Ext.panel.Panel',
        'Ext.toolbar.Fill'
    ],

    layout: 'border',

    items: [{
            xtype: 'toolbar',
            region: 'north',
            items:[{
                text: onlinetest.problem.Start,
                reference: 'refStart',
                handler: 'onStart'
            },{
                text: onlinetest.problem.Complete,
                reference: 'refComplete',
                handler: 'onComplete',
                disabled: true,
            }, '->', {
                    xtype: 'displayfield',
                    reference: 'refTimeLeft',
                    fieldLabel: onlinetest.problem.TimeLeft,
                    value: '02:00:00'
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