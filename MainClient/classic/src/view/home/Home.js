/**
 * Created by tony on 2015/10/15.
 */
Ext.define('MainClient.view.home.Home', {
    extend: 'Ext.panel.Panel',

    xtype: 'home',

    requires: [
        'Ext.layout.container.Border',
        'Ext.layout.container.HBox',
        'MainClient.view.home.CandidateDashBoard',
        'MainClient.view.home.HomeController',
        'MainClient.view.home.HomeModel',
        'MainClient.view.home.PositionDashboard'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'home',
    */

    viewModel: {
        type: 'home'
    },

    controller: 'home',
    layout: 'hbox',

    items: [{
        xtype: 'positiondashboard',
        width: '50%',
        height: '100%',
        margin: '0 10 0 0'
    }, {
        xtype: 'candidatedashboard',
        width: '50%',
        height: '100%',
        margin: '0 0 0 10'
    }
        /* include child components here */
    ]
});