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
        user.load({
            params: {
                login: me.getViewModel().get('login'),
                password: me.getViewModel().get('password')
            },
            failure: function(record, operation) {
                me.getReferences().refSignInPassword.setActiveError('Invalid user or password')
            },
            success: function(record, operation) {
                if (record.get('activated')){
                    me.getView().destroy();
                    Ext.create({
                        xtype: 'app-main'
                    });
                } else {
                    me.getReferences().refSignInPassword.setActiveError('Unactivated user.')
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
            failure: function(record, operation) {
                me.getReferences().refOrganization.setActiveError(operation.getError().response.responseText)
            },
            success: function(record, operation) {
                me.getReferences().refSignUpInformation.setHidden(false)
                me.getReferences().refSignUpInformation.setValue('Sugn up successfully, please go to the mail box to activate your account.')
            },
        })

    }
});