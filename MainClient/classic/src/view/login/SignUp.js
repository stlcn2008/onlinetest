/**
 * Created by tony on 2015/10/17.
 */
Ext.define('MainClient.view.login.SignUp', {
    extend: 'Ext.panel.Panel',

    xtype: 'signup',

    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.layout.container.VBox',
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
    } , {
        xtype: 'panel',
        region: 'west',
        width: '10%'
    }, {
        xtype: 'form',
        region: 'center',
        items: [{
            xtype: 'displayfield'
        },{
            xtype: 'textfield',
            fieldLabel: onlinetest.login.Email,
            allowBlank: false,
            msgTarget: 'under',
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
            msgTarget: 'under',
            cls: 'loginitem',
            bind: {
                value: '{password}'
            }
        }, {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: onlinetest.login.ConfirmedPassword,
            reference: 'refConfirmedPassword',
            msgTarget: 'under',
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
            msgTarget: 'under',
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
            margin: '30 0 0 50',
            cls: 'loginbutton',
            listeners: {
                click: 'onSignUpClick'
            }
        }, {
            xtype: 'displayfield',
            reference: 'refSignUpInformation',
            hidden: true

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