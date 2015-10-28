/**
 * Created by tony on 2015/10/11.
 */
Ext.define('MainClient.view.onlinetest.OnlineTestDetails', {
    extend: 'Ext.panel.Panel',

    xtype: 'onlinetestdetails',

    requires: [
        'Ext.layout.container.Border',
        'Ext.panel.Panel',
        'Ext.view.View'
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
            fieldLabel: onlinetest.main.position.Problems,
            width: '60%',
            margin: '5 0 5 5',
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
    },{
        xtype: 'toolbar',
        region: 'south',
        items:[{
            xtype: 'button',
            text:onlinetest.main.onlinetest.ExportPDF
        }]
    }
    ]
});