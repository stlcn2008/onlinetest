/**
 * Created by tony on 2015/9/24.
 */
Ext.define('MainClient.view.interview.InterviewsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.interviews',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onInterviewSelect: function(dataViewer, record, index, eOpts) {

        this.getViewModel().setData(record.getData());
        if (record.phantom) return;
        this.getStore('candidates').reload({
            params: {
                interviewid: record.getId()
            }
        });
        this.getStore('problems').reload({
            params: {
                interviewid: record.getId()
            }
        });

    },

    refreshInterviews: function() {

    },

    onAddCandidate: function() {
        this.getStore('candidates').add(
            Ext.create('model.AssignedCandidate' )
        );
    },

    onAddInterview: function() {
        this.getReferences().difficultyReference.setDisabled(false);
        var newInterView =  Ext.create('model.Interview');
        this.getViewModel().setData(newInterView.getData());
        this.getStore('candidates').removeAll();
        this.getStore('candidates').commitChanges();
        this.getStore('problems').removeAll();
        this.getStore('problems').commitChanges();
    },

    onSaveInterview: function() {
        var me = this;
        var data = this.getViewModel().getData();
        var interview = me.getStore('interviews').getById(data['id']);
        if (!interview){
            interview =  Ext.create('model.Interview');
            interview.set('createdDate', new Date());
        }

        interview.getFields().forEach(function(field){
            if ('id' != field.getName() && 'createdDate' != field.getName()) {
                interview.set(field.getName(), data[field.getName()]);
            }
        });

        interview.save({
            success: function(record, operation) {
                me.saveProblems(record.getId(), function(){
                    if (!me.getReferences().difficultyReference.isDisabled()) {
                        me.getReferences().difficultyReference.setDisabled(true);
                        me.getStore('interviews').add(record);
                        me.getReferences().interviewDataviewer.getSelectionModel().select(record);
                        me.getReferences().interviewDataviewer.focusNode(record);
                    }
                });
            },
        });
    },

    saveProblems: function(interviewId, callback) {
        this.getStore('problems').sync({
            params: {
                interviewid: interviewId
            },
            success: callback

        });
    },

    saveCandidates: function(interviewId) {
        this.getStore('candidates').sync({
            params: {
                interviewid: interviewId
            }
        });
    },

    onDifficultyChange: function(combo, newValue, oldValue, eOpts ) {
        if (combo.isDisabled()) return;
        this.refillProblem(newValue);
    },

    onReselectProblems: function() {
        this.refillProblem(this.getReferences().difficultyReference.getValue());
    },

    refillProblem: function(difficulty) {

        var tempProblemStore = Ext.create('Ext.data.Store', {
            autoLoad: false,
            model: 'MainClient.model.AssignedProblem',
        })

        var me = this;
        tempProblemStore.load({
            params: {
                difficulty: difficulty
            },

            callback: function(records, operation, success) {
                if  (success) {
                    me.getStore('problems').removeAll();
                    records.forEach(function(record){
                        var data = record.getData();
                        data['id'] = null;
                        var newAssignedProblem = Ext.create('model.AssignedProblem', data);
                        me.getStore('problems').add(newAssignedProblem);
                    })

                }
            }
        })
    },

    onSaveCandidates: function() {
        if (this.getReferences().difficultyReference.isDisabled()){
            this.saveCandidates(this.getViewModel().getData()['id']);
        }

    },

    onSendInvitation:function() {
        if (this.getReferences().difficultyReference.isDisabled()){
            this.getStore('candidates').each(function(record){
                if(record.get('invited') == false){
                    record.set('invited', true)
                }
            })

            this.getStore('candidates').sync({
                params: {
                    sendinvitation: true
                }
            });
        }
    },
});