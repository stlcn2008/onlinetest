/**
 * Created by tony on 2015/9/28.
 */
Ext.define('MainClient.view.interview.InterviewCandidates', {
    extend: 'Ext.grid.Panel',

    xtype:'interviewCandidates',

    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.selection.SpreadsheetModel'
    ],

    selModel: {
        type: 'spreadsheet',
        cellSelect: false,
        checkboxSelect: true,
        mode: 'MULTI',
        rowNumbererHeaderWidth: 0,
        toggleOnClick: true
    },

    initComponent: function() {

        Ext.apply(this, {
            plugins: ['cellediting'],
            columns: [
                {
                    text: onlinetest.main.position.Email,
                    dataIndex: 'email',
                    flex: 2,
                    editor: {
                        vtype: 'email',
                        allowBlank: false
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