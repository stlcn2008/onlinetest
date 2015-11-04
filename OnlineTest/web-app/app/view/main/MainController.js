/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('OnlineTestClient.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'OnlineTestClient.model.OnlineTest'
    ],

    currentProblem: false,

    currentAnswer:false,

    timerIntervalId: false,

    onlineTest: false,

    listen: {
        controller: {
            '*': {
                gotoGuide: 'onGuide',
                gotoPersonalInformation: 'onPersonalInformation',
                gotoOnlineTest: 'onOnlineTest',

            }
        },
    },

    init: function() {
        var me = this
        OnlineTestClient.model.OnlineTest.load(parseInt(this.getOnlineTestId()), {
            success: function(record, operation) {
                me.onlineTest = record
                var startTime = record.get('startTime')
                var endTime = record.get('endTime')
                if (endTime.getTime() > 0){
                    me.getReferences().refComplete.setDisabled(true)
                    me.getReferences().refStart.setDisabled(true)
                    var TOTAL = 2 * 60 * 60 - (endTime.getTime() - startTime.getTime())/1000
                    me.getReferences().refTimeLeft.setValue(Ext.util.Format.date(new Date(4 * 3600 * 1000 + TOTAL * 1000), 'h:i:s'))
                } else if (startTime.getTime() > 0 ) {
                    me.getReferences().refStart.setDisabled(true)
                    me.getReferences().refComplete.setDisabled(false)

                    var TOTAL = 2 * 60 * 60 - (new Date().getTime() - startTime.getTime())/1000

                    if (TOTAL > 0) {
                        me.timerIntervalId = setInterval(function () {
                            if (n < TOTAL) {
                                me.getReferences().refTimeLeft.setValue(Ext.util.Format.date(new Date(4 * 3600 * 1000 + TOTAL * 1000  - n++ * 1000), 'h:i:s'))
                            } else {
                                me.getReferences().refTimeLeft.setValue(Ext.util.Format.date(new Date(4 * 3600 * 1000 + TOTAL * 1000  - n++ * 1000), 'h:i:s'))
                                clearInterval(me.timerIntervalId)
                            }

                        }, 1000)
                    }
                }


            },
        })

    },

    getOnlineTestId: function() {
        var params = Ext.Object.fromQueryString(location.search);
        return params.onlinetestid;
    },

    onStart: function() {
        var me = this;
        me.onlineTest.set('startTime', new Date())
        var TOTAL = 2 * 60 * 60
        var n = 0
        me.onlineTest.save({
            success: function() {
            //failure: function() {
                me.timerIntervalId  = setInterval(function() {
                    if(n < TOTAL){
                        me.getReferences().refTimeLeft.setValue(Ext.util.Format.date(new Date(6*3600*1000 - n++  * 1000), 'h:i:s'))
                    } else {
                        me.getReferences().refTimeLeft.setValue(Ext.util.Format.date(new Date(6*3600*1000 - n++  * 1000), 'h:i:s'))
                        clearInterval(me.timerIntervalId)
                    }

                },1000)

                me.getReferences().refStart.setDisabled(true)
                me.getReferences().refComplete.setDisabled(false)
            }
        })

        var store = this.getStore('problems');
        store.load({
            params: {
                onlinetestid: me.getOnlineTestId()
            },

            callback: function(records, operation, success) {
                me.getReferences().refProblems.setValue(store.first().getId());
            }
        })
    },

    onComplete: function() {
        var me = this;
        me.onlineTest.set('endTime', new Date())

        me.onlineTest.save({
            //success: function() {
            failure: function() {
                me.getReferences().refComplete.setDisabled(true)
            }
        })
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
                // do something if the run failed
                //var message = operation.getResponse()?operation.getResponse().responseText:(operation.getError().response.responseText?operation.getError().response.responseText: operation.getError().response.statusText)

            },
            success: function(record, operation) {
                var cases = Ext.JSON.decode(record.get('result'))
                var result = {
                    total: record.get('failed') + record.get('passed'),
                    failed: record.get('failed'),
                    passed: record.get('failed'),
                    compile: cases['compile'],
                    cases: cases
                }

                me.getViewModel().set('result', result)
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
                    me.currentAnswer.set('result','')
                    me.getViewModel().setData(me.currentAnswer.getData())
                }
            }

        });
    },

    onGuide: function() {
        this.getReferences().refContent.getLayout().setActiveItem(0)
    },

    onPersonalInformation: function () {
        this.getReferences().refContent.getLayout().setActiveItem(1)
    },

    onOnlineTest: function() {
        this.getReferences().refContent.getLayout().setActiveItem(2)
    }

});
