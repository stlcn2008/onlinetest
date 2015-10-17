/**
 * Created by tony on 2015/10/11.
 */
Ext.define('MainClient.view.onlinetest.OnlineTestDetails', {
    extend: 'Ext.panel.Panel',

    xtype: 'onlinetestdetails',

    requires: [
        'Ext.layout.container.Border'
    ],

    layout: 'border',
    items: [{
        xtype: 'panel',
        region: 'north',
        height: '100',
        margin: '5 0 0 0',
        split: {
            size: 10
        },
        items: [{
            xtype: 'combo',
            width: '60%',
            bind: {
                store: '{problems}'
            },
            forceSelection: true,
            editable: false,
            queryMode: 'local',
            displayField: 'title',
            valueField: 'id',
            listeners:{
                change: 'onProblemChange'
            }
        }, {
            xtype: 'panel',
            layout: 'hbox',
            items: [{
                xtype: 'displayfield',
                fieldLabel: onlinetest.main.onlinetest.SuccessCases,
                bind: {
                    value: '{passed}'
                }
            }, {
                xtype: 'displayfield',
                fieldLabel: onlinetest.main.onlinetest.FailedCases,
                bind: {
                    value: '{failed}'
                }
            }
            ]
        }
        ]

    },{
        xtype: 'textarea',
        region: 'center',
        bind: {
            value: '{code}'
        }

    },{
        xtype: 'textarea',
        region: 'south',
        height: '40%',
        width: '100%',
        bind: {
            value: '{result}'
        },
        split: {
            size: 10
        }
    }
    ]
});