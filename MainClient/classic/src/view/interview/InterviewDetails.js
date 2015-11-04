/**
 * Created by tony on 2015/9/23.
 */
Ext.define('MainClient.view.interview.InterviewDetails', {
    extend: 'Ext.panel.Panel',

    xtype: 'interviewdetails',

    requires: [
        'Ext.button.Button',
        'Ext.data.Store',
        'Ext.form.FieldContainer',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.grid.Panel',
        'Ext.layout.container.Border'
    ],

    layout: 'border',
    //scrollable: true,
    items: [{
        xtype: 'form',
        padding: '5 0 0 0',
        region: 'center',
        width: '90%',
        height: '90%',
        minHeight: 476,
        split: true,
        items: [{
            xtype: 'textfield',
            fieldLabel: onlinetest.main.position.Code,
            editable: false,
            reference: 'refCode',
            margin: '10 10 10 10',
            bind: {
                value: '{code}'
            },
            anchor: '50%'
        }, {
            xtype: 'textfield',
            fieldLabel: onlinetest.main.position.Title,
            editable: false,
            reference: 'refTitle',
            margin: '10 10 10 10',
            bind: {
                value: '{title}'
            },
            anchor: '50%'
        }, {
            xtype: 'textfield',
            fieldLabel: onlinetest.main.position.Department,
            editable: false,
            reference: 'refDepartment',
            margin: '10 10 10 10',
            bind: {
                value: '{department}'
            },
            anchor: '50%'
        }, {
            xtype: 'textarea',
            fieldLabel: onlinetest.main.position.Description,
            margin: '10 10 10 10',
            reference: 'refDescription',
            editable: false,
            bind: {
                value: '{description}'
            },
            anchor: '90%'
        },{
            xtype: 'datefield',
            fieldLabel: onlinetest.main.position.ExpireDate,
            margin: '10 10 10 10',
            editable: false,
            disabled: true,
            reference: 'refExpireDate',
            bind: {
                value: '{expireDate}'
            }
            }, {
            xtype: 'combo',
            fieldLabel: onlinetest.main.position.Level,
            margin: '10 10 10 10',
            editable: false,
            disabled: true,
            reference: 'refDifficulty',
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
            },{
            xtype: 'fieldcontainer',
            margin: '10 10 10 10',
            fieldLabel: '    ',
            anchor: '90%',
            items: [
                {
                    xtype: 'grid',
                    bodyBorder: true,
                    border: true,
                    width: '100%',
                    height: 150,
                    bind: {
                        store: '{problems}'
                    },

                    columns: [
                        { text: onlinetest.main.position.problem.Name,  dataIndex: 'title', flex: 1 },
                        { text: onlinetest.main.position.problem.Level,  dataIndex: 'difficulty', flex: 0.1,
                            renderer: function(value) {
                                switch(value) {
                                    case 'hard':
                                        return onlinetest.main.position.problem.Hard
                                        break;
                                    case 'medium':
                                        return onlinetest.main.position.problem.Medium
                                        break;
                                    case 'easy':
                                        return onlinetest.main.position.problem.Low
                                        break;

                                }
                            }
                        }
                    ]
                }
            ]

        }
        ]}, /*,{
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
    ],
    bbar: {

    items: [{
        xtype: 'button',
        text: onlinetest.main.position.New,
        reference: 'refButtonNew',
        handler: 'onAddInterview'
    }, {
        xtype: 'button',
        text: onlinetest.main.position.Edit,
        disabled: true,
        reference: 'refButtonEdit',
        handler: 'onEditInterview'
    },{
        xtype: 'button',
        text: onlinetest.main.position.Save,
        disabled: true,
        reference: 'refButtonSave',
        handler: 'onSaveInterview'
    }, {
        xtype: 'button',
        text: onlinetest.main.position.Cancel,
        reference: 'refButtonCancel',
        handler: 'onCancel',
        disabled: true,
    }, {
        xtype: 'button',
        text: onlinetest.main.position.Close,
        reference: 'refButtonClose',
        disabled: true
    }
    ]
}
});