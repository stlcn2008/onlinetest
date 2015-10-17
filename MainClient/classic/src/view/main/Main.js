/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * Created by tony on 2015/8/27.
 */
Ext.define('MainClient.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.panel.Panel',
        'Ext.toolbar.Spacer',
        'Ext.toolbar.TextItem',
        'Ext.toolbar.Toolbar',
        'MainClient.view.home.Home',
        'MainClient.view.interview.Interviews',
        'MainClient.view.main.MainController',
        'MainClient.view.main.MainModel',
        'MainClient.view.onlinetest.OnlineTest'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'border',
    },
    plugins: 'viewport',
    items: [
        {
            xtype: 'toolbar',
            region: 'north',
            height: 64,
            items: [
                {
                    xtype: 'component',
                    cls: 'bestcoder-logo',
                    bind: {
                        html: '<div class="main-logo"><img src="resources/images/bestcoder.png">{organizationname}</div>'
                    },
                    width: 250
                },
                {
                    xtype: 'button',
                    text: onlinetest.main.Dashboard,
                    listeners: {
                        click: 'onHome'
                    }
                },
                {
                    xtype: 'button',
                    text: onlinetest.main.Positions,
                    listeners: {
                        click: 'onPositions'
                    }
                },
                {
                    xtype: 'button',
                    text: onlinetest.main.OnlineTest,
                    listeners: {
                        click: 'onOnlineTest'
                    }
                },
                /*
                {
                    xtype: 'button',
                    text: 'On site interview',
                    listeners: {
                        click: 'onOnsiteInterview'
                    }
                },*/
                {
                    xtype: 'tbspacer',
                    flex: 1
                },
                {
                    iconCls:'x-fa fa-th-large',
                    href: '#profile',
                    hrefTarget: '_self',
                    tooltip: onlinetest.main.Profile,
                },
                {
                    xtype: 'button',
                    text: onlinetest.main.Logout,
                    listeners: {
                        click: 'onLogout'
                    }

                },
                {
                    xtype: 'tbtext',
                    bind: {
                        text: '{login}',
                    }

                },
                {
                    xtype: 'image',
                    height: 35,
                    width: 35,
                    alt:'current user image',
                    src: 'resources/images/tony.png'
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            reference: 'refContent',
            layout: 'card',
            items: [{
                xtype: 'home',
                deferredRender: true
            },{
                xtype: 'positions',
                deferredRender: true
            },{
                xtype: 'onlinetest',
                deferredRender: true
            },{

            }]
        }
    ]
});
