/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MainClient.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Ext.app.ViewModel',
    ],

    listen: {
        controller: {
            '*': {
                addMorePositions: 'onPositions',
                inviteMoreCandidates: 'onPositions'

            }
        },
    },

    onLogout: function () {
        // Remove the localStorage key/value
        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },



    onOnsiteInterview: function() {

    },

    onOnlineTest: function() {
        this.getReferences().refContent.getLayout().setActiveItem(2)
    },

    onPositions: function() {
        this.getReferences().refContent.getLayout().setActiveItem(1)
    },

    onHome: function() {
        this.getReferences().refContent.getLayout().setActiveItem(0)
    }



});
