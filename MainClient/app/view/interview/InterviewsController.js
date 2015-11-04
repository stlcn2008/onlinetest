/**
 * Created by tony on 2015/9/24.
 */
Ext.define('MainClient.view.interview.InterviewsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.interviews',

    state: 'INIT',

    candidateState: 'INIT',

    currentPosition: false,
    /**
     * Called when the view is created
     */
    init: function() {
        var me = this
        this.updateViewState('INIT')
        this.getStore('candidates').addListener('update', function(store, record, operation, modifiedFieldNames, details, eOpts){
            me.updateCandidateButton('UPDATED')
        })
        this.getStore('candidates').addListener('datachanged', function(store, eOpts){
            me.updateCandidateButton('UPDATED')
        })

        this.getReferences().refCandidateGrid.addListener('selectionchange',function(grid,selected, eOpts ){
            me.onRowSelectionChange()
        })

    },

    onRowSelectionChange: function() {
        var records = this.getReferences().refCandidateGrid.getSelectionModel().getSelection()
        if (records && records.length > 0){
            this.getReferences().refRemoveCandidate.setDisabled(false)
            if ('UPDATED' == this.candidateState){
                this.getReferences().refSendInvitation.setDisabled(true)
            } else {
                this.getReferences().refSendInvitation.setDisabled(false)
            }
        } else {
            this.getReferences().refRemoveCandidate.setDisabled(true)
            this.getReferences().refSendInvitation.setDisabled(true)
        }

    },

    updateCandidateButton: function(state) {
        var me = this
        switch(state) {
            case 'UPDATED':
                me.getReferences().refSaveCandidate.setDisabled(false)
                me.getReferences().refCancelCandidate.setDisabled(false)
                break;
            case 'INIT':
                me.getReferences().refSaveCandidate.setDisabled(true)
                me.getReferences().refCancelCandidate.setDisabled(true)
                me.getReferences().refRemoveCandidate.setDisabled(true)
                me.getReferences().refSendInvitation.setDisabled(true)
                break;
        }
        me.candidateState = state
    },

    onInterviewSelect: function(dataViewer, record, index, eOpts) {

        var me = this
        me.currentPosition = record
        this.getViewModel().setData(record.getData())
        this.updateViewState('VIEW')
        this.getStore('candidates').reload({
            params: {
                interviewid: record.getId()
            },
            callback: function(records, operation, success){
                if (success) {
                    me.updateCandidateButton('INIT')
                }
            }
        });
        this.getStore('problems').reload({
            params: {
                interviewid: record.getId()
            }
        });



    },

    onAddInterview: function() {
        var newInterView =  Ext.create('model.Interview');
        this.getViewModel().setData(newInterView.getData());
        this.getStore('candidates').removeAll();
        this.getStore('candidates').commitChanges();
        this.getStore('problems').removeAll();
        this.getStore('problems').commitChanges();
        this.updateViewState('NEW')
    },

    onEditInterview: function () {
        this.updateViewState('EDIT')
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
            params: {
                organizationid: me.getViewModel().get('organizationid')
            },
            success: function(record, operation) {
                me.saveProblems(record.getId(), function(){
                    if (me.state == 'NEW') {
                        me.getStore('interviews').add(record);
                        me.getReferences().interviewDataviewer.getSelectionModel().select(record);
                        me.getReferences().interviewDataviewer.focusNode(record);
                        me.updateViewState('VIEW')
                    }
                });

            },
        });
    },

    onCancel: function() {
        var me = this
        switch(this.state) {
            case 'NEW':
               if(me.currentPosition) {
                   me.getViewModel().setData(me.currentPosition.getData())
               } else {
                   me.getViewModel().setData({})
               }
                me.updateViewState('INIT')
                break
            case 'EDIT':
                var record = me.getStore('interviews').getById(me.getViewModel().get('id'))
                me.getViewModel().setData(record.getData())
                me.updateViewState('VIEW')
                break
        }
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
        var me = this
        this.getStore('candidates').sync({
            params: {
                interviewid: interviewId
            },

            success: function() {
                me.getReferences().refCandidateGrid.getSelectionModel().deselectAll(true)
                me.updateCandidateButton('INIT')
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

    onAddCandidate: function() {
        this.getStore('candidates').add(
            Ext.create('model.AssignedCandidate' )
        );
    },

    onRemoveCandidate: function () {
        var records = this.getReferences().refCandidateGrid.getSelectionModel().getSelection()
        this.getStore('candidates').remove(records)
        this.getReferences().refRemoveCandidate.setDisabled(true)
    },

    onCancelCandidate: function() {
        this.getStore('candidates').rejectChanges();
        this.updateCandidateButton('INIT')
    },

    onSaveCandidates: function() {
        this.saveCandidates(this.getViewModel().getData()['id']);
    },

    onSendInvitation:function() {

        var me = this
        var records = this.getReferences().refCandidateGrid.getSelectionModel().getSelection()
        var store = this.getStore('candidates')
        records.forEach(function(record) {
            if (!record.get('invited')) {
                record.set('invited', true)
            }
        })

        if(store.getModifiedRecords().length <= 0) return

        Ext.getBody().mask(onlinetest.main.position.SendingInvitation)
        store.sync({
            params: {
                sendinvitation: true
            },
            success: function() {
                me.updateCandidateButton('INIT')
                Ext.getBody().unmask()
            },

            failure: function(batch){
                var emails = [];
                batch.getOperations().forEach(function(operation){
                    if (!operation.wasSuccessful()){
                        operation.getRecords().forEach(function(record){
                            emails.push(record.get('email'))
                            record.set('invited', false)
                        })
                    }
                })
                Ext.getBody().unmask()
                Ext.Msg.alert(onlinetest.main.position.FailedSendEmail,onlinetest.main.position.FailedSendEmailToUsers + '</p>' + emails.join('</p>'))
            }

        });

    },


    updateViewState: function(state) {

        var me = this;
        switch(state) {

            case 'INIT':
                me.getReferences().refButtonNew.setDisabled(false)
                me.getReferences().refButtonEdit.setDisabled(true)
                me.getReferences().refButtonSave.setDisabled(true)
                me.getReferences().refButtonCancel.setDisabled(true)
                me.getReferences().refButtonClose.setDisabled(true)
                me.getReferences().refTitle.setEditable(false)
                me.getReferences().refCode.setEditable(false)
                me.getReferences().refDepartment.setEditable(false)
                me.getReferences().refDescription.setEditable(false)
                me.getReferences().refExpireDate.setDisabled(true)
                me.getReferences().refDifficulty.setDisabled(true)
                break;
            case 'NEW':
                me.getReferences().refButtonNew.setDisabled(true)
                me.getReferences().refButtonEdit.setDisabled(true)
                me.getReferences().refButtonSave.setDisabled(false)
                me.getReferences().refButtonCancel.setDisabled(false)
                me.getReferences().refButtonClose.setDisabled(true)
                me.getReferences().refTitle.setEditable(true)
                me.getReferences().refCode.setEditable(true)
                me.getReferences().refDepartment.setEditable(true)
                me.getReferences().refDescription.setEditable(true)
                me.getReferences().refExpireDate.setDisabled(false)
                me.getReferences().refDifficulty.setDisabled(false)
                break;
            case 'VIEW':
                me.getReferences().refButtonNew.setDisabled(false)
                me.getReferences().refButtonEdit.setDisabled(false)
                me.getReferences().refButtonSave.setDisabled(true)
                me.getReferences().refButtonCancel.setDisabled(true)
                me.getReferences().refButtonClose.setDisabled(false)
                me.getReferences().refTitle.setEditable(false)
                me.getReferences().refCode.setEditable(false)
                me.getReferences().refDepartment.setEditable(false)
                me.getReferences().refDescription.setEditable(false)
                me.getReferences().refExpireDate.setDisabled(true)
                me.getReferences().refDifficulty.setDisabled(true)
                break;
            case 'EDIT':
                me.getReferences().refButtonNew.setDisabled(true)
                me.getReferences().refButtonEdit.setDisabled(true)
                me.getReferences().refButtonSave.setDisabled(false)
                me.getReferences().refButtonCancel.setDisabled(false)
                me.getReferences().refButtonClose.setDisabled(true)
                me.getReferences().refTitle.setEditable(true)
                me.getReferences().refCode.setEditable(true)
                me.getReferences().refDepartment.setEditable(true)
                me.getReferences().refDescription.setEditable(true)
                me.getReferences().refExpireDate.setDisabled(false)
                me.getReferences().refDifficulty.setDisabled(false)
        }
        me.state = state
    }

});