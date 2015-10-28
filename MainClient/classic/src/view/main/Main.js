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
            cls: 'toolbar',
            height: 64,
            items: [
                {
                    xtype: 'tbtext',
                    text: onlinetest.main.ProductName,
                    cls: 'productname',
                    margin: '0 100 0 0'
                },
                /*{
                    xtype: 'component',
                    cls: 'bestcoder-logo',
                    bind: {
                        html: '<div class="main-logo"><img src="resources/images/bestcoder.png">{organizationname}</div>'
                    },
                    width: 250
                },*/

                {
                    xtype: 'button',
                    text: onlinetest.main.Dashboard,
                    listeners: {
                        click: 'onHome'
                    },
                    cls: 'button'

                },
                { xtype: 'tbseparator' },
                {
                    xtype: 'button',
                    text: onlinetest.main.Positions,
                    listeners: {
                        click: 'onPositions'
                    },
                    cls: 'button'
                },
                { xtype: 'tbseparator' },
                {
                    xtype: 'button',
                    text: onlinetest.main.OnlineTest,
                    listeners: {
                        click: 'onOnlineTest'
                    },
                    cls: 'button'
                },
                { xtype: 'tbseparator' },
                {
                    xtype: 'button',
                    text: onlinetest.main.Settings,
                    listeners: {
                        click: 'onSettings'
                    },
                    cls: 'button'
                },
                /*
                {
                    xtype: 'button',
                    text: 'On site interview',
                    listeners: {
                        click: 'onOnsiteInterview'
                    }
                },

                {
                    iconCls:'x-fa fa-th-large',
                    href: '#profile',
                    hrefTarget: '_self',
                    tooltip: onlinetest.main.Profile,
                },*/
                {
                    xtype: 'tbspacer',
                    flex: 1
                },
                {
                    xtype: 'button',
                    text: onlinetest.main.Logout,
                    listeners: {
                        click: 'onLogout'
                    },
                    cls: 'button'
                },
                {
                    xtype: 'tbtext',
                    bind: {
                        text: '{login}',
                    },
                    cls: 'text'

                },/*,
                {
                    xtype: 'image',
                    height: 35,
                    width: 35,
                    alt:'current user image',
                    src: 'resources/images/tony.png'
                }*/
                {
                    xtype: 'tbtext',
                    bind: {
                        text: '{organizationname}'
                    },
                    cls: 'productname'
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
        }, {
            xtype: 'toolbar',
            region: 'south',
            cls: 'toolbar',
            height: 45,
            items: [{
                xtype: 'tbtext',
                text: onlinetest.login.ContactInformation,
                cls: 'text'
            }, '->', {
                xtype: 'button',
                text: onlinetest.main.ProductIntroduction,
                cls: 'button'
            }, {
                xtype: 'button',
                text: onlinetest.main.AboutOfus,
                cls: 'button'
            }]
        }
    ]
});
