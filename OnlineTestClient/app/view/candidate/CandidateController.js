/**
 * Created by tony on 2015/10/29.
 */
Ext.define('OnlineTestClient.view.candidate.CandidateController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.candidate',

    requires: [
        'Ext.data.Store',
        'OnlineTestClient.model.Candidate',
        'OnlineTestClient.model.EducationExperience',
        'OnlineTestClient.model.WorkExperience'
    ],

    candidate: false,

    /**
     * Called when the view is created
     */
    init: function() {

        var me = this
        me.updateWorkExperienceButtons('INIT')
        me.updateEducationExperienceButtons('INIT')
        me.getStore('workExperience').addListener('update', function(store, record, operation, modifiedFieldNames, details, eOpts){
            me.updateWorkExperienceButtons('UPDATED')
        })
        me.getStore('workExperience').addListener('datachanged', function(store, eOpts){
            me.updateWorkExperienceButtons('UPDATED')
        })

        me.getReferences().refWorkExperience.addListener('selectionchange',function(grid,selected, eOpts ){
            var records = me.getReferences().refWorkExperience.getSelectionModel().getSelection()
            if (records && records.length > 0){
                me.getReferences().refRemoveWorkExperience.setDisabled(false)
            } else {
                me.getReferences().refRemoveWorkExperience.setDisabled(true)
            }
        })

        me.updateEducationExperienceButtons('INIT')
        me.getStore('educationExperience').addListener('update', function(store, record, operation, modifiedFieldNames, details, eOpts){
            me.updateEducationExperienceButtons('UPDATED')
        })
        me.getStore('educationExperience').addListener('datachanged', function(store, eOpts){
            me.updateEducationExperienceButtons('UPDATED')
        })

        me.getReferences().refEducationExperiece.addListener('selectionchange',function(grid,selected, eOpts ){
            var records = me.getReferences().refEducationExperiece.getSelectionModel().getSelection()
            if (records && records.length > 0){
                me.getReferences().refRemoveEducationExperience.setDisabled(false)
            } else {
                me.getReferences().refRemoveEducationExperience.setDisabled(true)
            }
        })

        var store = Ext.create('Ext.data.Store', {model: 'OnlineTestClient.model.Candidate'})
        store.load({
            params: {
                onlinetestid : me.getOnlineTestId()
            },
            callback: function(records, operation, success){
                if (success){
                    me.candidate = records[0]
                    me.getViewModel().setData(me.candidate.getData())
                    me.getStore('workExperience').load({
                        params: {
                            candidateid: me.candidate.getId()
                        }
                    })

                    me.getStore('educationExperience').load({
                        params: {
                            candidateid: me.candidate.getId()
                        }
                    })
                }
            }
        })

    },

    getOnlineTestId: function() {
        var params = Ext.Object.fromQueryString(location.search);
        return params.onlinetestid;
    },

    onNext: function() {
        this.fireEvent('gotoOnlineTest')
    },
    onPrevious: function() {
        this.fireEvent('gotoGuide')
    },

    onSave: function() {
        var me = this
        var data = me.getViewModel().getData()

        me.candidate.getFields().forEach(function(field){
            me.candidate.set(field.getName(), data[field.getName()]);
        });
        me.candidate.save()
    },

    addWorkExperience: function() {
        this.getStore('workExperience').add(Ext.create('OnlineTestClient.model.WorkExperience'))
    },

    removeWorkExperience: function() {
        var records = this.getReferences().refWorkExperience.getSelectionModel().getSelection()
        this.getStore('workExperience').remove(records)
        this.getReferences().refRemoveWorkExperience.setDisabled(true)
    },

    saveWorkExperience: function() {
        var me = this
        this.getStore('workExperience').sync({
            params: {
                candidateid:me.candidate.getId()
            },

            success: function() {
               me.updateWorkExperienceButtons('INIT')
            }
        })
    },

    cancelWorkExperience: function() {
        this.getStore('workExperience').rejectChanges()
        this.updateWorkExperienceButtons('INIT')
    },

    addEducationExperience: function() {
        this.getStore('educationExperience').add(Ext.create('OnlineTestClient.model.EducationExperience'))
    },

    removeEducationExperience: function() {
        var records = this.getReferences().refEducationExperiece.getSelectionModel().getSelection()
        this.getStore('educationExperience').remove(records)
        this.getReferences().refRemoveEducationExperience.setDisabled(true)
    },

    saveEducationExperience: function() {
        var me = this
        this.getStore('educationExperience').sync({
            params: {
                candidateid:me.candidate.getId()
            },

            success: function() {
                me.updateEducationExperienceButtons('INIT')
            }

        })
    },

    cancelEducationExperience: function() {
        this.getStore('educationExperience').rejectChanges()
        this.updateEducationExperienceButtons('INIT')
    },

    updateWorkExperienceButtons: function(state) {
        var me = this
        switch(state) {
            case 'UPDATED':
                me.getReferences().refSaveWorkExperience.setDisabled(false)
                me.getReferences().refCancelWorkExperience.setDisabled(false)
                break;
            case 'INIT':
                me.getReferences().refSaveWorkExperience.setDisabled(true)
                me.getReferences().refCancelWorkExperience.setDisabled(true)
                me.getReferences().refRemoveWorkExperience.setDisabled(true)
                break;
        }
        me.candidateState = state
    },

    updateEducationExperienceButtons: function(state) {
        var me = this
        switch(state) {
            case 'UPDATED':
                me.getReferences().refSaveEducationExperience.setDisabled(false)
                me.getReferences().refCancelEducationExperience.setDisabled(false)
                break;
            case 'INIT':
                me.getReferences().refSaveEducationExperience.setDisabled(true)
                me.getReferences().refCancelEducationExperience.setDisabled(true)
                me.getReferences().refRemoveEducationExperience.setDisabled(true)
                break;
        }
        me.candidateState = state
    }
});