/**
 * Created by tony on 2015/10/11.
 */
Ext.define('MainClient.view.onlinetest.OnlineTestDetails', {
    extend: 'Ext.panel.Panel',

    xtype: 'onlinetestdetails',

    requires: [
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.layout.container.Border',
        'Ext.panel.Panel'
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
            reference: 'refProblem',
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
            style:'background-color:#FFFFFF;overflow:auto',
            tpl:[
                '<div style="overflow:visible">',
                    '<tpl if = "code">',
                        '<h3>{[onlinetest.main.onlinetest.Code]}</h3>',
                        '<pre>{code}</pre>',
                    '</tpl>',
                    '<tpl if = "compile">',
                        '<h3>{[onlinetest.main.onlinetest.CompileError]}</h3>',
                        '<pre>{compile}</pre>',
                    '<tpl elseif ="cases">',
                        '<h3>{[onlinetest.main.onlinetest.TestResult]}</h3>',
                        '<h4>{[Ext.String.format(onlinetest.main.onlinetest.TotalCases, values.total)]}</h4>',
                        '<h4>{[Ext.String.format(onlinetest.main.onlinetest.FailedCases, values.failed)]}</h4>',
                        '<h4>{[Ext.String.format(onlinetest.main.onlinetest.SuccessCases, values.passed)]}</h4>',
                        '<tpl for="cases">',
                            '<tpl if = "failed">',
                            '<p><span>{[Ext.String.format(onlinetest.main.onlinetest.FailedCase,xindex, values.expected, values.actual)]}</span></p>',
                            '<tpl elseif = "exceptional">',
                            '<p><span>{[Ext.String.format(onlinetest.main.onlinetest.ExceptionalCase, xindex, values.message)]}</span></p>',
                            '<tpl else>',
                            '<p><span>{[Ext.String.format(onlinetest.main.onlinetest.PassedCase, xindex)]}</span></p>',
                            '</tpl>',
                        '</tpl>',
                    '<tpl else>',
                        '<p>{message}</p>',
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