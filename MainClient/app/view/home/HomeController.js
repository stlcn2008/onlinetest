/**
 * Created by tony on 2015/10/15.
 */
Ext.define('MainClient.view.home.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onAddMorePositions: function() {
        this.fireEvent('addMorePositions')
    },

    onInviteMoreCandidates: function() {
        this.fireEvent('inviteMoreCandidates')
    }
});