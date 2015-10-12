/**
 * Created by tony on 2015/9/22.
 */
Ext.define('MainClient.view.interview.InterviewSet', {
    extend: 'Ext.panel.Panel',

    xtype: 'interviewset',

    requires: [
        'MainClient.model.Interview'
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
            items: [{
                xtype: 'datefield',
                reference: 'fromDate',
                fieldLabel: 'From:',
                labelWidth: 50,
                value: Ext.Date.subtract(new Date(), Ext.Date.DAY, 5)
            }, {
                xtype: 'datefield',
                reference: 'toDate',
                fieldLabel : 'To',
                labelWidth: 50,
                value: new Date()
            }]
        };

        this.bbar = {

            items: ['->',{
                xtype: 'button',
                text: 'New',
                handler: 'onAddInterview'
            }, {
                xtype: 'button',
                text: 'Save',
                handler: 'onSaveInterview'
            }, {
                xtype: 'button',
                text: 'Cancel'
            }
            ]
        }

        this.items = [{
            xtype: 'dataview',
            reference: 'interviewDataviewer',
            scrollable: true,
            tpl: [
                '<tpl for=".">',
                '<div class="interview">',
                '<img src="resources/images/interview1.png" width="80" height="60"/><h3>{title}</h3>',
                '</div>',
                '</tpl>'
            ],
            itemSelector: 'div.interview',
            bind: {
                store: '{interviews}'
            },

            listeners: {
                select: 'onInterviewSelect'
            }


        }, {

        }];

        this.callParent(arguments);
    }
});