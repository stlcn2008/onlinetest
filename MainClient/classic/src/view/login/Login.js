/**
 * Created by tony on 2015/8/31.
 */
Ext.define('MainClient.view.login.Login', {
    extend: 'Ext.panel.Panel',
    xtype: 'login',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.plugin.Viewport',
        'Ext.toolbar.Fill',
        'Ext.toolbar.TextItem',
        'MainClient.view.login.LoginController',
        'MainClient.view.login.LoginViewModel',
        'MainClient.view.login.SignIn',
        'MainClient.view.login.SignUp'
    ],

    controller: 'login',
    viewModel: 'login',
    bodyPadding: 10,
    plugins: 'viewport',
    layout: 'border',
    items: [{
        xtype: 'panel',
        region: 'center',
        layout: 'card',
        reference: 'refLogin',
        items: [{
            xtype: 'signin'
        }, {
            xtype: 'signup'
        }],
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
    }]
});