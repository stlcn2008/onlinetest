/**
 * Created by tony on 2015/10/11.
 */
Ext.define('MainClient.view.onlinetest.CandidateSet', {
    extend: 'Ext.panel.Panel',

    xtype: 'candidateset',
    requires: [
        'MainClient.model.Interview'
    ],

    initComponent: function() {
        this.tbar = {
            defaults: {
                listeners: {
                    select: 'refreshInterviews'
                }
            },
            items: [{
                xtype: 'combo',
                fieldLabel: 'Positions',
                labelWidth: 50,
                width: '100%',
                forceSelection: true,
                editable: false,
                bind:{
                    store: '{positions}'
                },
                queryMode: 'local',
                displayField: 'title',
                valueField: 'id',
                listeners:{
                    change: 'onPositionChange'
                }
            }]
        };



        this.items = [{
            xtype: 'dataview',
            scrollable: true,
            tpl: [
                '<tpl for=".">',
                '<div class="candidate">',
                '<img src="resources/images/programer.png" width="40" height="30"/><h3>{firstName} {lastName}</h3>',
                '</div>',
                '</tpl>'
            ],
            itemSelector: 'div.candidate',
            bind: {
                store: '{candidates}'
            },

            listeners: {
                select: 'onCandidateSelect'
            }


        }, {

        }];

        this.callParent(arguments);
    }
});