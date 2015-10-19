/**
 * Created by tony on 2015/10/16.
 */
Ext.define('MainClient.view.home.CandidateDashBoard', {
    extend: 'Ext.panel.Panel',

    xtype: 'candidatedashboard',

    requires: [
        'Ext.button.Button',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar',
        'Ext.layout.container.Border',
        'Ext.panel.Panel'
    ],
    title: onlinetest.main.dashboard.candidates.title,
    layout: 'border',
    items: [{
            xtype: 'panel',
            region: 'north',
            height: 100,
            html: '<span class="dashboardstatistic">' + Ext.String.format(onlinetest.main.dashboard.candidates.Statistic, 254) + '</span>'
        },
        {
        xtype: 'cartesian',
        flipXY: true,
        region: 'center',
        store: {
            fields: ['name', 'value'],
            data: [ {
                name: onlinetest.main.dashboard.candidates.UnInvited,
                value: 35
            }, {
                name: onlinetest.main.dashboard.candidates.Invited,
                value: 254
            }, {
                name: onlinetest.main.dashboard.candidates.OnlineTesting,
                value: 3
            }, {
                name: onlinetest.main.dashboard.candidates.Passed,
                value: 144
            }, {
                name: onlinetest.main.dashboard.candidates.Failed,
                value: 110
            }, {
                name: onlinetest.main.dashboard.candidates.OnsiteInterview,
                value: 144
            }, {
                name: onlinetest.main.dashboard.candidates.Hired,
                value: 86
            }]
        },
        axes: [{
            type: 'category',
            position: 'left',
            title: {
                text: onlinetest.main.dashboard.candidates.Status,
                fontSize: 15
            },
            fields: 'name'
        }, {
            type: 'numeric',
            position: 'bottom',
            title: {
                text: onlinetest.main.dashboard.candidates.Count,
                fontSize: 15
            },
            fields: 'value'
        }],
        series: {
            type: 'bar',
            highlight: true,
            subStyle: {
                fill: ['#388FAD'],
                stroke: '#1F6D91'
            },
            xField: 'name',
            yField: 'value'
        }
    },  {
            xtype: 'panel',
            region: 'south',
            height: '10%',

            items: [{
                xtype: 'button',
                width: 200,
                height: 50,
                text: onlinetest.main.dashboard.candidates.InviteMore,
                cls: 'morebutton',
                handler: 'onInviteMoreCandidates'
            }]

        }]
});