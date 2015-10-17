/**
 * Created by tony on 2015/8/31.
 */
Ext.define('MainClient.view.login.Login', {
    extend: 'Ext.tab.Panel',
    xtype: 'login',

    requires: [
        'Ext.form.Panel',
        'MainClient.view.login.LoginController',
        'MainClient.view.login.LoginViewModel'
    ],

    controller: 'login',
    viewModel: 'login',
    bodyPadding: 10,
    plugins: 'viewport',
    items: [
        {
            title: onlinetest.login.SignIn,
            xtype: 'form',
            //controller: 'signin',
            items: [{
                xtype: 'textfield',
                name: 'login',
                emptyText: onlinetest.login.Login,
                fieldLabel: onlinetest.login.Login,
                allowBlank: false,
                msgTarget: 'under',
                bind: {
                    value: '{login}'
                }
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: onlinetest.login.Password,
                reference: 'refSignInPassword',
                msgTarget: 'under',
                allowBlank: false,
                bind: {
                    value: '{password}'
                }
            }, {
                    xtype: 'button',
                    formBind: true,
                    text: onlinetest.login.SignIn,
                    listeners: {
                        click: 'onSigninClick'
                    }
            }]
        },,

        {
            title: onlinetest.login.SignUp,
            xtype: 'form',
            //controller: 'signup',
            items: [ {
                xtype: 'textfield',
                fieldLabel: onlinetest.login.Email,
                allowBlank: false,
                msgTarget: 'under',
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
                bind: {
                    value: '{confirmedPassword}'
                }
            }, {
                xtype: 'textfield',
                fieldLabel: onlinetest.login.Phone,
                bind: {
                    value: '{phone}'
                }
            },{
                xtype: 'textfield',
                reference: 'refOrganization',
                fieldLabel: onlinetest.login.Compnany,
                msgTarget: 'under',
                allowBlank: false,
                bind: {
                    value: '{organization}'
                }
            },{
                xtype: 'button',
                formBind: true,
                text: onlinetest.login.SignUp,
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