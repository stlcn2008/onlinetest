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
                text: onlinetest.main.position.Add,
                handler: 'onAddCandidate'
            }, {
                text: onlinetest.main.position.Remove,
            }, {
                text: onlinetest.main.position.Save,
                handler: 'onSaveCandidates'
            }, {
                text: onlinetest.main.position.SendInvitation,
                handler: 'onSendInvitation'
            }
            ],
            columns: [
                {
                    text: onlinetest.main.position.Email,
                    dataIndex: 'email',
                    flex: 2,
                    editor: {
                        allowBlank: false,
                        vtype: 'email'
                    }
                },
                {
                    text: onlinetest.main.position.FirstName,
                    dataIndex: 'firstName',
                    flex: 1,
                    editor: {
                        xtype: 'textfield'
                    }},
                {
                    text: onlinetest.main.position.LastName,
                    dataIndex: 'lastName',
                    flex: 1,
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    text: onlinetest.main.position.Invited,
                    dataIndex: 'invited',
                    flex: 1,
                    renderer: function(value) {
                        return value? onlinetest.main.position.Yes: onlinetest.main.position.No
                    }
                }
            ]
        });
        this.callParent();
    }
});