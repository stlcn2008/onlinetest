/**
 * Created by tony on 2015/8/31.
 */
Ext.define('MainClient.view.login.Login', {
    extend: 'Ext.tab.Panel',
    xtype: 'login',

    requires: [
        'MainClient.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    plugins: 'viewport',
    items: [
        {
            title: "Sign in",
            xtype: 'form',
            //controller: 'signin',
            items: [{
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false
            }, {
                xtype: 'displayfield',
                hideEmptyLabel: false,
                value: 'Enter any non-blank password'
            }, {
                xtype: 'button',
                formBind: true,
                text: 'Sign in',
                listeners: {
                    click: 'onSigninClick'
                }
            }

            ],
        },
        {
            title: "Sign up",
            xtype: 'form',
            //controller: 'signup',
            items: [{
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Confirm Password',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'organization',
                fieldLabel: 'Organization',
                allowBlank: false
            },{
                xtype: 'button',
                formBind: true,
                text: 'Sign up',
                listeners: {
                    click: 'onSignUpClick'
                }
            }

            ],
        }
    ]

});