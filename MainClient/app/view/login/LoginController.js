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
        this.getView().destroy();
        Ext.create({
            xtype: 'app-main'
        });

    },

    onSignUpClick: function() {
        this.getView().destroy();
        Ext.create({
            xtype:'app-main'
        });
    }
});