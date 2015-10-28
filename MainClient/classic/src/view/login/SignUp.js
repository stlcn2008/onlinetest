/**
 * Created by tony on 2015/10/17.
 */
Ext.define('MainClient.view.login.SignUp', {
    extend: 'Ext.panel.Panel',

    xtype: 'signup',

    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.layout.container.Border',
        'Ext.layout.container.VBox',
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
                    text: onlinetest.login.ExistingUser,
                    margin: '0 0 0 0',
                    cls: 'text'
                }, {
                    xtype: 'button',
                    text: onlinetest.login.SignIn,
                    cls: 'button',
                    handler: 'onGotoSignIn'
                }
            ],

        }, {
            xtype: 'panel',
            width: '100%',
            html: '<span class="loginencourage">' + onlinetest.login.SignupEncourage + '</span>'
        }]
    } ,{
        xtype: 'panel',
        layout: 'border',
        region: 'center',
        items: [{
            xtype: 'panel',
            region: 'north',
            layout: 'center',
            height: 432,
            items: [{
                xtype: 'form',
                region: 'center',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: onlinetest.login.Email,
                    allowBlank: false,
                    reference: 'refEmail',
                    cls: 'loginitem',
                    vtype: 'email',
                    bind: {
                        value: '{email}'
                    }
                }, {
                    xtype: 'textfield',
                    inputType: 'password',
                    fieldLabel: onlinetest.login.Password,
                    reference: 'refSignUpPassword',
                    allowBlank: false,
                    cls: 'loginitem',
                    bind: {
                        value: '{password}'
                    }
                }, {
                    xtype: 'textfield',
                    inputType: 'password',
                    fieldLabel: onlinetest.login.ConfirmedPassword,
                    reference: 'refConfirmedPassword',
                    allowBlank: false,
                    cls: 'loginitem',
                    bind: {
                        value: '{confirmedPassword}'
                    }
                }, {
                    xtype: 'textfield',
                    fieldLabel: onlinetest.login.Phone,
                    cls: 'loginitem',
                    bind: {
                        value: '{phone}'
                    }
                },{
                    xtype: 'textfield',
                    reference: 'refOrganization',
                    fieldLabel: onlinetest.login.Compnany,
                    cls: 'loginitem',
                    allowBlank: false,
                    bind: {
                        value: '{organization}'
                    }
                },{
                    xtype: 'button',
                    formBind: true,
                    text: onlinetest.login.SignUp,
                    cls: 'loginitem',
                    width: 150,
                    margin: '20 0 0 62',
                    cls: 'loginbutton',
                    listeners: {
                        click: 'onSignUpClick'
                    }
                }, {
                    xtype: 'displayfield',
                    cls: 'loginitem',
                    reference: 'refSignUpInformation',
                    hidden: true
                }]
            }]
        },{
            xtype: 'panel',
            region: 'center'
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