/**
 * Created by tony on 2015/10/11.
 */
Ext.define('MainClient.view.onlinetest.OnlineTestController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.onlinetest',

    onPositionChange: function(source, newValue, oldValue) {
        this.getStore('candidates').reload({
            params: {
                interviewid:newValue
            }
        })

    },

    onCandidateSelect: function(dataViewer, record, index, eOpts) {
        this.getViewModel().set('assignedcandidateid',record.getId() )
        this.getStore('problems').reload({
            params: {
                assignedcandidateid: record.getId()
            }
        })
    },

    onProblemChange: function(source, newValue, oldValue) {

        var me = this;
        var tempAnswerStore = Ext.create('Ext.data.Store', {
            autoLoad: false,
            model: 'MainClient.model.TestAnswer',
        });

        tempAnswerStore.load({
            params: {
                assignedproblemid: newValue,
                assignedcandidateid: me.getViewModel().get('assignedcandidateid')
            },

            callback: function(records, operation, success) {
                if (success) {
                    me.getViewModel().setData(records[0].getData())
                }
            }
        })
    },
    /**
     * Called when the view is created
     */
    init: function() {

    }
});