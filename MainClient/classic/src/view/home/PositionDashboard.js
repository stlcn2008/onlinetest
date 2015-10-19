/**
 * Created by tony on 2015/10/16.
 */
Ext.define('MainClient.view.home.PositionDashboard', {
    extend: 'Ext.panel.Panel',

    xtype: 'positiondashboard',

    requires: [
        'Ext.button.Button',
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.layout.container.Border',
        'Ext.panel.Panel',
        'MainClient.view.home.Notifications',
        'Ext.chart.interactions.ItemHighlight'
    ],
    title:onlinetest.main.dashboard.positions.title,
    layout: 'border',
    items: [{
        xtype: 'panel',
        region: 'north',
        height: 100,
        html: '<span class="dashboardstatistic">' + Ext.String.format(onlinetest.main.dashboard.positions.Statistic, 32, 20, 12) + '</span> <p></p>' +
        '<span class="dashboardstatistic">' + Ext.String.format(onlinetest.main.dashboard.positions.AvgPeriod, 16) + '</span>'
    }, {
        xtype: 'polar',
        region: 'center',
        innerPadding: 20,
        store: {
            fields: ['name', 'value'],
            data: [{
                name: onlinetest.main.dashboard.candidates.Completed,
                value: 20
            }, {
                name: onlinetest.main.dashboard.candidates.UnStarted,
                value: 4
            }, {
                name: onlinetest.main.dashboard.candidates.OnGoing,
                value: 8
            }]
        },
        series: {
            type: 'pie',
            angleField: 'value',
            highlight: true,
            label: {
                field: 'name',
                display: 'value'
            }
        }

    }, {
        xtype: 'panel',
        region: 'south',
        height: '30%',
        items: [{
            xtype: 'button',
            width: 200,
            height:50,
            text: onlinetest.main.dashboard.positions.AddMore,
            cls: 'morebutton',
            handler: 'onAddMorePositions'
        }, {
            xtype: 'notifications',
            margin: '10 0 0 0'
        }]

    }
    ]
});