/**
 * Created by tony on 2015/10/29.
 */
Ext.define('OnlineTestClient.view.guide.GuideController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.guide',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onNext: function() {
        this.fireEvent('gotoPersonalInformation')
    }
});