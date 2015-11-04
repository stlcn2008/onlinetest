/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 */
Ext.define('OnlineTestClient.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.panel.Panel',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.toolbar.TextItem',
        'Ext.toolbar.Toolbar',
        'OnlineTestClient.view.candidate.Candidate',
        'OnlineTestClient.view.guide.Guide',
        'OnlineTestClient.view.main.MainController',
        'OnlineTestClient.view.main.MainModel',
        'OnlineTestClient.view.onlinetest.OnlineTest'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'onlinetest',

    layout: 'border',

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

                {
                    xtype: 'button',
                    text: onlinetest.main.Guide,
                    listeners: {
                        click: 'onGuide'
                    },
                    cls: 'button'

                },
                { xtype: 'tbseparator' },
                {
                    xtype: 'button',
                    text: onlinetest.main.PersonalInformation,
                    listeners: {
                        click: 'onPersonalInformation'
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
                },'->',{
                    xtype: 'tbtext',
                    bind: {
                        text: '{login}',
                    },
                    cls: 'text'
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            reference: 'refContent',
            layout: 'card',
            items: [{
                xtype: 'guide',
                deferredRender: true
            },{
                xtype: 'candidate',
                deferredRender: true
            },{
                xtype: 'onlinetest',
                deferredRender: true
            }]
        }]
});
