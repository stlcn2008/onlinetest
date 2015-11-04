/**
 * Created by tony on 2015/10/29.
 */
Ext.define('OnlineTestClient.view.candidate.Candidate', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.grid.Panel',
        'Ext.grid.plugin.CellEditing',
        'Ext.layout.container.Accordion',
        'Ext.layout.container.Column',
        'Ext.panel.Panel',
        'Ext.util.Format',
        'OnlineTestClient.view.candidate.CandidateController',
        'OnlineTestClient.view.candidate.CandidateModel'
    ],

    xtype: 'candidate',

    viewModel: {
        type: 'candidate'
    },

    controller: 'candidate',
    scrollable: true,

    layout: 'accordion',
    items: [{
        xtype: 'panel',
        title: onlinetest.personal.BasicInformation,
        items: [
            {
                xtype: 'form',
                padding: 20,
                scrollable: true,
                layout: 'column',
                defaults: {
                    margin: '0 0 0 10'
                },
                items: [{
                        width: '17%',
                        items:[{
                            xtype: 'textfield',
                            fieldLabel: onlinetest.personal.FirstName,
                            bind: {
                                value: '{firstName}'
                            }
                        }]
                    }, {
                        width: '17%',
                        items:[{
                            xtype: 'textfield',
                            fieldLabel: onlinetest.personal.LastName,
                            bind: {
                                value: '{lastName}'
                            }
                        }]

                    }, {
                        width: '17%',
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: onlinetest.personal.Email,
                            bind: {
                                value: '{email}'
                            }

                        }]
                    }, {
                        width: '17%',
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: onlinetest.personal.Phone,
                            bind: {
                                value: '{phone}'
                            }
                        }]
                    }, {
                        width: '17%',
                        items: [{
                            xtype: 'combo',
                            fieldLabel: onlinetest.personal.WorkingYears,
                            editable: false,
                            forceSelection: true,
                            bind: {
                                store: '{workingYears}',
                                value: '{workingYears}'
                            },
                            queryMode: 'local',
                            displayField: 'title',
                            valueField: 'value',
                        }
                        ]
                    }, {
                        width: '17%',
                        items: [{
                            xtype: 'combo',
                            fieldLabel: onlinetest.personal.HighestDegree,
                            editable: false,
                            forceSelection: true,
                            bind: {
                                store: '{degrees}',
                                value: '{highestDegree}'
                            },
                            queryMode: 'local',
                            displayField: 'title',
                            valueField: 'value',
                        }]
                    }

                ]
            }
        ],
        bbar:[{
                xtype: 'button',
                text: onlinetest.personal.Save,
                width: 150,
                handler: 'onSave'
            }
        ]}, {
        xtype: 'grid',
        selModel: {
            type: 'spreadsheet',
            cellSelect: false,
            checkboxSelect: true,
            mode: 'MULTI',
            rowNumbererHeaderWidth: 0,
            toggleOnClick: true
        },
        reference: 'refWorkExperience',
        reserveScrollbar: true,
        title: onlinetest.personal.WorkExperience,
        bodyBorder: true,
        autoHeight: true,
        bind: {
            store: '{workExperience}'
        },
        plugins: ['cellediting'],
        buttons: [{
            text: onlinetest.personal.Add,
            handler: 'addWorkExperience',
            reference: 'refAddWorkExperience',
        }, {
            text: onlinetest.personal.Remove,
            handler: 'removeWorkExperience',
            reference: 'refRemoveWorkExperience',
            disabled: true
        }, {
            text: onlinetest.personal.Save,
            handler: 'saveWorkExperience',
            reference: 'refSaveWorkExperience',
            disabled: true
        }, {
            text: onlinetest.personal.Cancel,
            handler: 'cancelWorkExperience',
            reference: 'refCancelWorkExperience',
            disabled: true
        }],

        columns: [
            { text: onlinetest.personal.Company,  dataIndex: 'company', flex: 2 ,
                editor: {
                    xtype: 'textfield'
                }
            },
            { text: onlinetest.personal.Title,  dataIndex: 'title', flex: 2,
                editor: {
                    xtype: 'textfield'
                }
            },
            { text: onlinetest.personal.From,  dataIndex: 'start', flex: 1,
                editor: {
                    xtype: 'datefield'
                },
                renderer: function(value){
                    return Ext.util.Format.date(value, Ext.util.Format.dateFormat);
                }
            },
            { text: onlinetest.personal.To,  dataIndex: 'end', flex: 1,
                editor: {
                    xtype: 'datefield'
                },
                renderer: function(value){
                    return Ext.util.Format.date(value, Ext.util.Format.dateFormat);
                }
            },
            { text: onlinetest.personal.Responsibility,  dataIndex: 'responsibility', flex: 5,
                editor: {
                    xtype: 'textarea',
                    height: 300
                },
                renderer: function(value) {
                    if(value){
                        return value.replace(/\n/g, '<br/>')
                    }
                    return value
                }
            },

        ]
    },{
        xtype: 'grid',
        selModel: {
            type: 'spreadsheet',
            cellSelect: false,
            checkboxSelect: true,
            mode: 'MULTI',
            rowNumbererHeaderWidth: 0,
            toggleOnClick: true
        },
        reference: 'refEducationExperiece',
        title: onlinetest.personal.EducationExperience,
        bodyBorder: true,
        bind: {
            store: '{educationExperience}'
        },
        plugins: [Ext.create('Ext.grid.plugin.CellEditing')],
        columns: [
            { text: onlinetest.personal.School,  dataIndex: 'school', flex: 2,
                editor: {
                    xtype: 'textfield'
                }

            },
            { text: onlinetest.personal.Major,  dataIndex: 'major', flex: 2,
                editor: {
                    xtype: 'textfield'
                }
            },
            { text: onlinetest.personal.From,  dataIndex: 'start', flex: 1,
                editor: {
                    xtype: 'datefield'
                },
                renderer: function(value) {
                    return Ext.util.Format.date(value, Ext.util.Format.dateFormat);
                }

            },
            { text: onlinetest.personal.To,  dataIndex: 'end', flex: 1,
                editor: {
                    xtype: 'datefield'
                },
                renderer: function(value) {
                    return Ext.util.Format.date(value, Ext.util.Format.dateFormat);
                }
            },
            { text: onlinetest.personal.Degree,  dataIndex: 'degree', flex: 1,
                editor: {
                    xtype: 'combo',
                    editable: false,
                    forceSelection: true,
                    bind: {
                        store: '{degrees}'
                    },
                    queryMode: 'local',
                    displayField: 'title',
                    valueField: 'value',
                },
                renderer: function(value) {
                    switch(value){
                        case 'doctor':
                            return onlinetest.personal.Doctor
                        case 'master':
                            return onlinetest.personal.Master
                        case 'undergraduate':
                            return onlinetest.personal.UnderGraduate
                        case 'college':
                            return onlinetest.personal.College
                        case 'other':
                            return onlinetest.personal.Other
                    }
                }
            },

        ],
        buttons: [{
            text: onlinetest.personal.Add,
            handler: 'addEducationExperience',
            reference: 'refAddEducationExperience',
        }, {
            text: onlinetest.personal.Remove,
            handler: 'removeEducationExperience',
            reference: 'refRemoveEducationExperience',
            disabled: true
        }, {
            text: onlinetest.personal.Save,
            handler: 'saveEducationExperience',
            reference: 'refSaveEducationExperience',
            disabled: true
        }, {
            text: onlinetest.personal.Cancel,
            handler: 'cancelEducationExperience',
            reference: 'refCancelEducationExperience',
            disabled: true
        }],
    }],


    bbar: [ {
        xtype: 'button',
        width: 150,
        text: onlinetest.guide.Previous,
        handler: 'onPrevious'
    }, {
        xtype: 'button',
        width: 150,
        text: onlinetest.guide.Next,
        handler: 'onNext'
    }]
});