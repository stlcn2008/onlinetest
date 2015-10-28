/**
 * Created by tony on 2015/9/22.
 */
Ext.define('MainClient.view.interview.InterviewSet', {
    extend: 'Ext.panel.Panel',

    xtype: 'interviewset',

    requires: [
        'Ext.view.View',
    ],

    afterShow: function() {
    },

    store: false,

    initComponent: function() {
        this.tbar = {
            defaults: {
                listeners: {
                    select: 'refreshInterviews'
                }
            },
            items: [/*{
                xtype: 'datefield',
                reference: 'fromDate',
                fieldLabel: onlinetest.main.position.From,
                labelWidth: 50,
                value: Ext.Date.subtract(new Date(), Ext.Date.DAY, 5)
            }, {
                xtype: 'datefield',
                reference: 'toDate',
                fieldLabel : onlinetest.main.position.To,
                labelWidth: 50,
                value: new Date()
            }*/]
        };

        this.items = [{
            xtype: 'dataview',
            reference: 'interviewDataviewer',
            scrollable: 'true',
            height: '100%',
            tpl: new Ext.XTemplate(
                '<tpl for=".">',
                '<div class="interview">',
                '<span><h3>{[values.code? values.code + "-- " + values.title:values.title]}</h3></span>',
                '<span><h5>{[this.level(values.difficulty) + "  " +  this.format(values.expireDate)]}</h5></span>',
                '</div>',
                '</tpl>',
                {
                    format: function(date) {
                        return Ext.String.format(onlinetest.main.position.Expired, Ext.util.Format.date(date, Ext.util.Format.dateFormat))
                    },

                    level: function(levelCode) {
                        var levelName = onlinetest.main.position.Junior
                        switch (levelCode) {
                            case "easy":
                                levelName = onlinetest.main.position.Junior
                                break
                            case "medium":
                                levelName = onlinetest.main.position.Normal
                                break
                            case "hard":
                                levelName = onlinetest.main.position.Senior
                                break
                        }
                        return levelName;

                    }
                }
            ),
            itemSelector: 'div.interview',
            bind: {
                store: '{interviews}'
            },

            listeners: {
                select: 'onInterviewSelect'
            }
        }];

        this.callParent(arguments);
    }
});