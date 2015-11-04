/**
 * Created by tony on 2015/9/16.
 */
Ext.define('OnlineTestClient.view.onlinetest.Solution', {
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
                    text: onlinetest.solution.Save,
                    handler: 'onSave'

                    },{
                    text: onlinetest.solution.Run,
                    handler: 'onRun'

                }, {
                    text: onlinetest.solution.Submit,
                    handler: 'onSubmit'
                }]

        }]

    },{
        xtype: 'panel',
        region: 'center',
        margin: '0 0 5 0',
        items:[{
            xtype: 'component',
            width: '100%',
            height: '100%',
            style:'background-color:#FFFFFF;',
            tpl:[
                '<div style="width:100%;height:100%;">',
                 '<tpl if = "compile">',
                        '<p style="width:100%;height:100%;"><textarea style="border:0px;resize:none;width:100%;height:100%">{compile}</textarea></p>',
                    '<tpl else>',
                        '<p>Total: {total}</p>',
                        '<p>Failed: {failed}</p>',
                        '<p>Passed: {passed}</p>',

                        '<tpl for="cases">',
                            '<tpl if = "failed">',
                                '<p><span>Case{#} Expected: {expected}, Actual: {actual}</span></p>',
                            '<tpl elseif = "exceptional">',
                                '<p><span>Case{#} Exception: {message}</span></p>',
                            '<tpl else>',
                                '<p><span>Case{#} Passed</span></p>',
                            '</tpl>',
                        '</tpl>',
                    '</tpl>',
                '</div>'
            ],
            bind: {
                data:'{result}'
            }
        }]
    }
    ]
});