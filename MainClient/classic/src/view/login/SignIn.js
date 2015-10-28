/**
 * Created by tony on 2015/10/17.
 */
Ext.define('MainClient.view.login.SignIn', {
    extend: 'Ext.panel.Panel',

    xtype: 'signin',

    requires: [
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.layout.container.Border',
        'Ext.layout.container.Center',
        'Ext.panel.Panel',
        'Ext.toolbar.Fill',
        'Ext.toolbar.TextItem'
    ],

    layout: 'border',

    items: [{
        xtype: 'panel',
        layout: 'vbox',
        region: 'north',
        width: '100%',
        items: [{
            xtype: 'toolbar',
            region: 'north',
            height: 64,
            cls: 'toolbar',
            width: '100%',
            items: [
                {
                    xtype: 'tbtext',
                    text: onlinetest.main.ProductName,
                    cls: 'productname'
                },
                '->',
                {
                    xtype: 'tbtext',
                    text: onlinetest.login.NonExistingUser,
                    margin: '0 0 0 0"',
                    cls: 'text'
                }, {
                    xtype: 'button',
                    text: onlinetest.login.SignUp,
                    cls: 'button',
                    handler: 'onGotoSignUp'
                }
            ]
        }, {
            xtype: 'panel',
            width: '100%',
            html: '<span class="loginencourage">' + onlinetest.login.SigninEncourage + '</span>'
        }]
    }, {
        xtype: 'panel',
        region: 'center',
        layout: 'border',
        items:[{
            xtype: 'panel',
            region: 'north',
            height: 256,
            layout: 'center',
            items: [{
                xtype: 'form',
                items: [{
                    xtype: 'textfield',
                    name: 'login',
                    emptyText: onlinetest.login.Login,
                    fieldLabel: onlinetest.login.Login,
                    allowBlank: false,
                    cls: 'loginitem',
                    bind: {
                        value: '{login}'
                    }
                }, {
                    xtype: 'textfield',
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: onlinetest.login.Password,
                    reference: 'refSignInPassword',
                    allowBlank: false,
                    cls: 'loginitem',
                    bind: {
                        value: '{password}'
                    }
                }, {
                    xtype: 'button',
                    formBind: true,
                    text: onlinetest.login.SignIn,
                    margin: '20 0 0 62',
                    width: 150,
                    cls: 'loginbutton',
                    listeners: {
                        click: 'onSigninClick'
                    }
                }]
            }]

        },{
            xtype: 'panel',
            region: 'center',
        }]
    }, {
        xtype: 'image',
        region: 'east',
        width: '50%',
        src: 'resources/images/recommendation.png',
        split: {
            size: 5
        }
    }]



});