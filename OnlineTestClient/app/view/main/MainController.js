/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('OnlineTestClient.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    currentProblem: false,

    currentAnswer:false,

    getOnlineTestId: function() {
        var params = Ext.Object.fromQueryString(location.search);
        return params.onlinetestid;
    },

    onStart: function() {
        var me = this;
        var store = this.getStore('problems');
        store.load({
            params: {
                onlinetestid: me.getOnlineTestId()
            },

            callback: function(records, operation, success) {
                me.getReferences().refProblems.setValue(store.first().getId());
            }
        })
/*
        Ext.defer(function() {
            me.getReferences().problems.setValue(store.first().getId());
        }, 100)
*/
    },

    onProblemChange: function(source, newValue, oldValue) {

        var me = this;
        if (me.currentAnswer){
            me.currentAnswer.set('code',me.getViewModel().getData().code);
            me.currentAnswer.save();
        }

        me.currentProblem = me.getStore('problems').getById(newValue);
        me.getViewModel().set('description', me.currentProblem.get('description'));
        me.changeCurrentAnswer(me.getOnlineTestId(),newValue, me.currentAnswer? me.currentAnswer.get('language'): 'Java');


    },

    onSave: function() {
        this.currentAnswer.set('code',this.getViewModel().getData().code);
        this.currentAnswer.save();
    },

    onRun: function() {
        var me = this;
        me.getViewModel().set('result', onlinetest.solution.Executing)
        this.currentAnswer.set('code',this.getViewModel().getData().code);
        this.currentAnswer.save({
            params: {
                run: true
            },
            failure: function(record, operation) {
                // do something if the save failed
                //var message = operation.getResponse()?operation.getResponse().responseText:(operation.getError().response.responseText?operation.getError().response.responseText: operation.getError().response.statusText)
                me.getViewModel().set('result', record.get('result'))
            },
            success: function(record, operation) {
                me.getViewModel().set('result', record.get('result'))
            },
        });
    },

    onSubmit: function() {
        this.currentAnswer.set('code',this.getViewModel().getData().code);
        this.currentAnswer.set('submitted',true);
        this.currentAnswer.save();
    },

    onLanguageChange: function(source, newValue, oldValue) {
        this.changeCurrentAnswer(this.getOnlineTestId(), this.currentProblem.getId(), newValue)
    },

    changeCurrentAnswer: function(onlineTestId, problemId, language) {
        var me = this;
        var store = me.getStore('testAnswers');
        store.load({
            params: {
                onlinetestid: onlineTestId,
                problemid: problemId,
                language: language
            },
            callback: function(records, operation, success){
                if (success) {
                    me.currentAnswer = records[0];
                    me.getViewModel().setData(me.currentAnswer.getData());
                }
            }

        });
    }
});
