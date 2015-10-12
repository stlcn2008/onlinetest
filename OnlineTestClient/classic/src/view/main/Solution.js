/**
 * Created by tony on 2015/9/16.
 */
Ext.define('OnlineTestClient.view.main.Solution', {
    extend: 'Ext.panel.Panel',

    xtype: 'solution',
    layout: 'border',
    //collapsible: true,
    items: [{
        xtype: 'panel',
        region: 'north',
        height: '60%',
        split:{
            size: 10
        },
        //collapsible: true,
        layout: 'border',
        items:[{
            xtype: 'toolbar',
            region: 'north',
            reference: 'language',
            items: [{
                xtype: 'combo',
                forceSelection: true,
                editable: false,
                bind:{
                    store: '{languages}'
                },
                value: 'Java',
                queryMode: 'local',
                displayField: 'id',
                valueField: 'id',
                listeners:{
                    change: 'onLanguageChange'
                }
            }

            ]

            },
            {
            xtype: 'textarea',
            region: 'center',
            bind: {
                value: '{code}'
            }
        },{
            xtype: 'toolbar',
            region: 'south',
            items: [{
                    text: 'Save',
                    handler: 'onSave'

                    },{
                    text: 'Run',
                    handler: 'onRun'

                }, {
                    text: 'Submit'
                }]

        }]

    },{
        xtype: 'textarea',
        region: 'center',
        editable: false,
        split: {
            size: 10
        },
        bind: {
            value: '{result}'
        }
    }
    ]
});