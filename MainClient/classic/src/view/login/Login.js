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
    viewModel: 'login',
    bodyPadding: 10,
    plugins: 'viewport',
    items: [
        {
            title: "Sign in",
            xtype: 'form',
            //controller: 'signin',
            items: [{
                xtype: 'textfield',
                name: 'login',
                emptyText: 'Phone/Email',
                fieldLabel: 'Phone/Email',
                allowBlank: false,
                bind: {
                    value: '{login}'
                }
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                reference: 'refSignInPassword',
                msgTarget: 'under',
                allowBlank: false,
                bind: {
                    value: '{password}'
                }
            }, {
                    xtype: 'button',
                    formBind: true,
                    text: 'Sign in',
                    listeners: {
                        click: 'onSigninClick'
                    }
            }]
        },,

        {
            title: "Sign up",
            xtype: 'form',
            //controller: 'signup',
            items: [ {
                xtype: 'textfield',
                fieldLabel: 'Email',
                allowBlank: false,
                vtype: 'email',
                bind: {
                    value: '{email}'
                }
            }, {
                xtype: 'textfield',
                inputType: 'password',
                fieldLabel: 'Password',
                reference: 'refSignUpPassword',
                allowBlank: false,
                bind: {
                    value: '{password}'
                }
            }, {
                xtype: 'textfield',
                inputType: 'password',
                fieldLabel: 'Confirm Password',
                reference: 'refConfirmedPassword',
                msgTarget: 'under',
                allowBlank: false,
                bind: {
                    value: '{confirmedPassword}'
                }
            }, {
                xtype: 'textfield',
                fieldLabel: 'Phone',
                allowBlank: false,
                bind: {
                    value: '{phone}'
                }
            },{
                xtype: 'textfield',
                reference: 'refOrganization',
                fieldLabel: 'Organization',
                msgTarget: 'under',
                allowBlank: false,
                bind: {
                    value: '{organization}'
                }
            },{
                xtype: 'button',
                formBind: true,
                text: 'Sign up',
                listeners: {
                    click: 'onSignUpClick'
                }
            }, {
                xtype: 'displayfield',
                reference: 'refSignUpInformation',
                hidden: true

            }
            ],
        }
    ]

});