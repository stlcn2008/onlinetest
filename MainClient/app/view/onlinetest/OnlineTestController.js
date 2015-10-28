/**
 * Created by tony on 2015/10/11.
 */
Ext.define('MainClient.view.onlinetest.OnlineTestController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.onlinetest',

    requires: [
        'MainClient.model.TestAnswer'
    ],

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
                    if (records && records.length >0 ) {
                        var record = records[0]
                        var cases = []
                        try{
                            cases = Ext.JSON.decode(record.get('result'))
                        } catch(e){}

                        var result = {
                            total: record.get('failed') + record.get('passed'),
                            failed: record.get('failed'),
                            passed: record.get('failed'),
                            compile: cases['compile'],
                            cases: cases
                        }

                        me.getViewModel().set('result', result)
                    } else {
                        Ext.MessageBox.alert('', onlinetest.main.onlinetest.NoTestResult)
                    }
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