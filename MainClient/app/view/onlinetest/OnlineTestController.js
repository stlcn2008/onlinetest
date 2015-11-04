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
        var me = this
        me.getViewModel().set('result', {})
        me.getReferences().refProblem.clearValue()
        this.getStore('candidates').reload({
            params: {
                interviewid:newValue
            },
        })

    },

    onCandidateSelect: function(dataViewer, record, index, eOpts) {
        var me = this
        me.getReferences().refProblem.clearValue()
        me.getViewModel().set('result', {})
        this.getViewModel().set('assignedcandidateid',record.getId() )
        this.getStore('problems').reload({
            params: {
                assignedcandidateid: record.getId()
            },
            callback: function (records, operation, success) {
                if (success){
                    if(records && records.length >0) {
                        me.getReferences().refProblem.setValue(records[0].getId())
                    } else {
                        me.getReferences().refProblem.clearValue()
                }
                }
            }
        })
    },

    onProblemChange: function(source, newValue, oldValue) {
        var me = this;
        me.getViewModel().set('result', {})
        if (!newValue) return
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
                            passed: record.get('passed'),
                            compile: cases['compile'],
                            code: record.get('code'),
                            cases: cases
                        }

                        me.getViewModel().set('result', result)
                    } else {
                        //Ext.MessageBox.alert('', onlinetest.main.onlinetest.NoTestResult)
                        me.getViewModel().set('result', {message:onlinetest.main.onlinetest.NoTestResult})
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