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
                fieldLabel: onlinetest.main.Positions,
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
            height: '100%',
            tpl: [
                '<tpl for=".">',
                '<div class="candidate">',
                '<span><h3>{[values.firstName + " " + values.lastName + "--" + this.status(values.invited)]}</h3></span>',
                '<span><h5>{email}</h5></span>',
                '</div>',
                '</tpl>',
                {
                    status: function(invited) {
                        return invited? onlinetest.main.position.Invited:onlinetest.main.position.NotInvited
                    }
                }

            ],
            itemSelector: 'div.candidate',
            bind: {
                store: '{candidates}'
            },

            listeners: {
                select: 'onCandidateSelect'
            }
        }];

        this.callParent(arguments);
    }
});