/**
 * Created by tony on 2015/10/11.
 */
Ext.define('MainClient.view.onlinetest.OnlineTestModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.onlinetest',

    stores: {
        positions: {
            autoLoad: false,
            model: 'MainClient.model.Interview',
        },

        candidates: {
            autoLoad: false,
            model: 'MainClient.model.AssignedCandidate'

        },

        problems: {
            autoLoad: false,
            model: 'MainClient.model.AssignedProblem'
        }

        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:

        users: {
            model: 'OnlineTest',
            autoLoad: true
        }
        */
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});