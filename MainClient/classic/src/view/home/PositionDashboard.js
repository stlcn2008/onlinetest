/**
 * Created by tony on 2015/10/16.
 */
Ext.define('MainClient.view.home.PositionDashboard', {
    extend: 'Ext.panel.Panel',

    xtype: 'positiondashboard',

    requires: [
        'Ext.button.Button',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar',
        'Ext.form.field.Display',
        'Ext.layout.container.Border',
        'Ext.layout.container.VBox',
        'Ext.panel.Panel'
    ],

    layout: 'border',
    items: [{
        xtype: 'cartesian',
        innerPadding: {top: 50, left: 50, right: 50, bottom: 0},
        title: onlinetest.main.dashboard.positions.title,
        region: 'center',
        store: {
            fields: ['month', 'value'],
            data: [{
                name: Ext.String.format(onlinetest.main.dashboard.positions.Monthth,'7'),
                value: 3
            }, {
                name: Ext.String.format(onlinetest.main.dashboard.positions.Monthth,'8'),
                value: 7
            }, {
                name: Ext.String.format(onlinetest.main.dashboard.positions.Monthth,'9'),
                value: 11
            },{
                name: Ext.String.format(onlinetest.main.dashboard.positions.Monthth,'10'),
                value: 18
            }, {
                name: Ext.String.format(onlinetest.main.dashboard.positions.Monthth,'11'),
                value: 25
            }, {
                name: Ext.String.format(onlinetest.main.dashboard.positions.Monthth,'12'),
                value: 25
            }]
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            title: {
                text: onlinetest.main.dashboard.positions.Count,
                fontSize: 15
            },
            fields: 'value'
        }, {
            type: 'category',
            position: 'bottom',
            title: {
                text: onlinetest.main.dashboard.positions.Month,
                fontSize: 15
            },
            fields: 'name'
        }],
        series: {
            type: 'bar',
            subStyle: {
                fill: ['#388FAD'],
                stroke: '#1F6D91'
            },
            xField: 'name',
            yField: 'value'
        }
    }, {
        xtype: 'panel',
        layout: 'vbox',
        region: 'south',
        height: '30%',
        items: [{
            xtype: 'displayfield',
            value: onlinetest.main.dashboard.positions.Greeting,
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
                text: onlinetest.main.dashboard.positions.AddMore,
                listeners: {
                    click: 'onAddMorePositions'
                }
            }]
        }]

    }
        /* include child components here */

    ]
});