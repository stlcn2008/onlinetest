/**
 * Created by tony on 2015/10/16.
 */
Ext.define('MainClient.view.home.CandidateDashBoard', {
    extend: 'Ext.panel.Panel',

    xtype: 'candidatedashboard',

    requires: [
        'Ext.button.Button',
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.form.field.Display',
        'Ext.layout.container.Border',
        'Ext.layout.container.VBox',
        'Ext.panel.Panel'
    ],

    layout: 'border',
    items: [{
        xtype: 'polar',
        title: onlinetest.main.dashboard.candidates.title,
        region: 'center',
        innerPadding: 20,
        store: {
            fields: ['name', 'value'],
            data: [ {
                name: onlinetest.main.dashboard.candidates.Completed,
                value: 30
            }, {
                name: onlinetest.main.dashboard.candidates.UnStarted,
                value: 11
            }, {
                name: onlinetest.main.dashboard.candidates.OnGoing,
                value: 3
            }, {
                name: onlinetest.main.dashboard.candidates.GiveUp,
                value: 1
            }]
        },
        series: {
            type: 'pie',
            angleField: 'value',
            label: {
                field: 'name',
                display: 'value'
            }
            /*
            highlight: true,
            highlightCfg: {
                margin: 10,
                fillOpacity: .7
            }
            */
        }
    }, {
        xtype: 'panel',
        layout: 'vbox',
        region: 'south',
        height: '30%',
        items: [{
            xtype: 'displayfield',
            value: onlinetest.main.dashboard.candidates.Greeting,
            width: '100%',
            height: 80,
            renderer: function (value, field) {
                return '<span style="width:100%; font-size: 30px;line-height:30px; text-align:center; float:left">' + value + '</span>';
            }

        }, {
            xytpe: 'toolbar',
            width: '100%',
            items: [{
                xtype: 'button',
                width: '100%',
                text: onlinetest.main.dashboard.candidates.InviteMore,
                listeners: {
                    click: 'onInviteMoreCandidates'
                }
            }]

        }
        ]
    }
        /* include child components here */

    ]
});