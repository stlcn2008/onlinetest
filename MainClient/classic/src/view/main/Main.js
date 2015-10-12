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
        'Ext.layout.container.Border',
        'Ext.ux.statusbar.StatusBar',
        'MainClient.view.main.MainController',
        'MainClient.view.main.MainModel',

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
                    html: '<div class="main-logo"><img src="resources/images/bestcoder.png">Best Coder</div>',
                    width: 250
                },
                {
                    xtype: 'button',
                    text: 'Positions',
                    listeners: {
                        click: 'onPotions'
                    }
                },
                {
                    xtype: 'button',
                    text: 'On Line Test',
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
                    tooltip: 'See your profile'
                },
                {
                    xtype: 'button',
                    text: 'Sign out',
                    listeners: {
                        click: 'onLogout'
                    }

                },
                {
                    xtype: 'tbtext',
                    text: 'Tony Shen',
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
                xtype: 'positions'
            },{
                xtype: 'onlinetest'
            },{

            }]
        }
    ]
});
