/**
 * Created by tony on 2015/10/29.
 */
Ext.define('OnlineTestClient.view.guide.GuideModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.guide',

    stores: {
        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:

        users: {
            model: 'Guide',
            autoLoad: true
        }
        */
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
        guide: {
            hello: 'Hello1'
        }
    }
});