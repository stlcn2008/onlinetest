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
            fieldLabel: onlinetest.main.position.Title,
            bind: {
                value: '{title}'
            },
            width: '100%'
        }, {
            xtype: 'textarea',
            fieldLabel: onlinetest.main.position.Description,
            bind: {
                value: '{description}'
            },
            width: '100%'
        },{
                xtype: 'datefield',
                fieldLabel: onlinetest.main.position.ExpireDate,
                bind: {
                    value: '{expireDate}'
                }
            }, {
            xtype: 'combo',
            fieldLabel: onlinetest.main.position.Level,
            editable: false,
            disabled: true,
            reference: 'difficultyReference',
            store: Ext.create('Ext.data.Store', {
                fields: ['value', 'title'],
                data: [
                    {"value": "easy", "title": onlinetest.main.position.Junior},
                    {"value": "medium", "title": onlinetest.main.position.Normal},
                    {"value": "hard", "title": onlinetest.main.position.Senior}
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
            text: onlinetest.main.position.Reselect,
            handler: 'onReselectProblems'
        }],
        columns: [
            { text: onlinetest.main.position.Title,  dataIndex: 'title', flex: 1 },
            { text: onlinetest.main.position.Description, dataIndex: 'description', flex: 5 }
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