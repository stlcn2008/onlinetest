/**
 * Created by tony on 2015/9/23.
 */
Ext.define('MainClient.view.interview.InterviewDetails', {
    extend: 'Ext.panel.Panel',

    xtype: 'interviewdetails',

    layout: 'border',

    items: [{
        xtype: 'form',
        padding: '5 0 0 0',
        region: 'center',
        layout: 'auto',
        split: true,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Title',
            bind: {
                value: '{title}'
            },
            width: '100%'
        }, {
            xtype: 'textarea',
            fieldLabel: 'Description',
            bind: {
                value: '{description}'
            },
            width: '100%'
        },{
                xtype: 'datefield',
                fieldLabel: 'Expiring date',
                bind: {
                    value: '{expireDate}'
                }
            }, {
            xtype: 'combo',
            fieldLabel: 'Level',
            editable: false,
            disabled: true,
            reference: 'difficultyReference',
            store: Ext.create('Ext.data.Store', {
                fields: ['value', 'title'],
                data: [
                    {"value": "easy", "title": "Junior"},
                    {"value": "medium", "title": "Normal"},
                    {"value": "hard", "title": "Senior"}
                ]
            }),
            queryMode: 'local',
            displayField: 'title',
            valueField: 'value',
            bind: {
                value: '{difficulty}'
            },
            listeners: {
               change: 'onDifficultyChange'
            }
            }
        ] }, {
        xtype: 'grid',
        title: 'Problems',
        region: 'south',
        height: '40%',
        bind: {
            store: '{problems}'
        },
        buttons: [{
            text: 'Reselect',
            handler: 'onReselectProblems'
        }],
        columns: [
            { text: 'Title',  dataIndex: 'title', flex: 1 },
            { text: 'Description', dataIndex: 'description', flex: 5 }
        ]
    }/*,{
        xtype: 'interviewCandidates',
        title: 'Candidates',
        region: 'south',
        height:'40%',
        bind: {
            store: '{candidates}'
        },
        split: true
    }
*/
    ]
});