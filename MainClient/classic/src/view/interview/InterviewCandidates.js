/**
 * Created by tony on 2015/9/28.
 */
Ext.define('MainClient.view.interview.InterviewCandidates', {
    extend: 'Ext.grid.Panel',

    xtype:'interviewCandidates',

    initComponent: function() {

        this.editing = Ext.create('Ext.grid.plugin.CellEditing');
        Ext.apply(this, {
            plugins: [this.editing],
            buttons: [{
                text: 'Add',
                handler: 'onAddCandidate'
            }, {
                text: 'Remove'
            }, {
                text: 'Save',
                handler: 'onSaveCandidates'
            }, {
                text: 'Send invitation',
                handler: 'onSendInvitation'
            }
            ],
            columns: [
                {
                    text: 'Email',
                    dataIndex: 'email',
                    flex: 2,
                    editor: {
                        allowBlank: false,
                        vtype: 'email'
                    }
                },
                {
                    text: 'First Name',
                    dataIndex: 'firstName',
                    flex: 1,
                    editor: {
                        xtype: 'textfield'
                    }},
                {
                    text: 'Last Name',
                    dataIndex: 'lastName',
                    flex: 1,
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    text: 'Invited',
                    dataIndex: 'invited',
                    flex: 1,
                    renderer: function(value) {
                        return value? 'Yes':'No'
                    }
                }
            ]
        });
        this.callParent();
    }
});