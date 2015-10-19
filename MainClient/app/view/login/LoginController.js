/**
 * Created by tony on 2015/9/1.
 */
Ext.define('MainClient.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [

    ],

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onSigninClick: function() {

        var me = this
        var user = Ext.create('MainClient.model.Signin')
        user.setId(null)
        var login = me.getViewModel().get('login')
        var password = me.getViewModel().get('password')
        user.load({
            params: {
                login: login,
                password: password,
                lang: 'zh_CN'
            },
            failure: function(record, operation) {
                me.getReferences().refSignInPassword.setActiveError(onlinetest.login.InvalidUserOrPassword)
            },
            success: function(record, operation) {
                if (record.get('activated')){
                    me.getView().destroy()
                    var mainViewModel = Ext.create('MainClient.view.main.MainModel', {
                        data: {
                            organizationname:record.get('organizationname'),
                            organizationid:record.get('organizationid'),
                            login: login,
                            userid: record.getId()
                        }
                    })
                    var main = Ext.create({
                        xtype: 'app-main',
                        viewModel: mainViewModel
                    });
                    main.getViewModel().setData({

                    })

                } else {
                    me.getReferences().refSignInPassword.setActiveError(onlinetest.login.UnactivatedUser)
                    //Please go to your mail box to activate this account.
                }
            },
        })

    },

    onSignUpClick: function() {

        var me = this
        var data = me.getViewModel().getData()
        data['id'] = null
        var user = Ext.create('MainClient.model.Signup', data)
        user.save({
            params: {
                lang: 'zh_CN'
            },

            failure: function(record, operation) {
                me.getReferences().refOrganization.setActiveError(operation.getError().response.responseText)
            },
            success: function(record, operation) {
                me.getReferences().refSignUpInformation.setHidden(false)
                me.getReferences().refSignUpInformation.setValue(onlinetest.login.SignUpSucceed)
            },
        })

    },

    onGotoSignUp: function() {
        this.getReferences().refLogin.getLayout().setActiveItem(1)
    },

    onGotoSignIn: function() {
        this.getReferences().refLogin.getLayout().setActiveItem(0)
    }
});