
Ext.define("dapper.view.main.MainMenuView",{
    extend: 'Ext.tree.TreePanel',
    xtype: 'app-main-menu-view',
    "controller": "main-mainmenuview",
    "viewModel": {
        "type": "main-mainmenuview"
    },

    initComponent: function() {

        me = this;
        
        dapper.refs.MainMenuView = me;

        Ext.apply(me, {
            rootVisible: false,
            hideHeaders: true,
            root: {
                expanded: true,
                children: [
                    { text: "Search", access: 'user', viewxtype: 'app-main-search-view', leaf: true },
                    { text: "Schedules", access: 'user', expanded: false, children: [
                        { text: "Batch create", access: 'user', leaf: true },
                        { text: "Create/Edit", access: 'user', leaf: true }
                    ] },
                    { text: "Invoices", access: 'user', expanded: false, children: [
                        { text: "Create/Edit", access: 'user', leaf: true },
                        { text: "Printing", access: 'user', leaf: true }
                    ] },
                    { text: "Payments", access: 'user', expanded: false, children: [
                        { text: "Create/Edit", access: 'user', leaf: true }
                    ] },
                    { text: "Payroll", access: 'user', expanded: false, children: [
                        { text: "Batch create", access: 'user', leaf: true },
                        { text: "Create/Edit", access: 'user', leaf: true }
                    ] },
                    { text: "A/R", access: 'user', expanded: false, children: [
                        { text: "Receivables", access: 'user',  viewxtype: 'app-receivables-grid-view', leaf: true },
                        { text: "Overdue Summary", access: 'user', viewxtype: 'app-collection-summary-grid-view', leaf: true },
                        { text: "Overdue Detail", access: 'user', viewxtype: 'app-collection-grid-view', leaf: true }
                    ] },
                    { text: "Maintain files", access: 'user', expanded: false, children: [
                        { text: "Customers", access: 'user', viewxtype: 'app-customer-active-grid-view', leaf: true },
                        { text: "Jobs", access: 'user', viewxtype: 'app-job-active-grid-view', leaf: true },
                        { text: "Jobcodes", access: 'user', viewxtype: 'app-jobcode-active-grid-view', leaf: true },
                        { text: "Messages", access: 'user', viewxtype: 'app-message-active-grid-view', leaf: true }
                    ] },
                    { text: "Undelete files", access: 'user', expanded: false, children: [
                        { text: "Customers", access: 'user', viewxtype: 'app-customer-deleted-grid-view', leaf: true },
                        { text: "Jobs", access: 'user', viewxtype: 'app-job-deleted-grid-view',leaf: true },
                        { text: "Jobcodes", access: 'user', viewxtype: 'app-jobcode-deleted-grid-view', leaf: true },
                        { text: "Messages", access: 'user', viewxtype: 'app-message-deleted-grid-view', leaf: true }
                    ] },
                    { text: "Operating Settings", access: 'user', leaf: true },
                    { text: "Admin Maintain", access: 'admin', expanded: false, children: [
                        { text: "Users", access: 'admin', viewxtype: 'app-user-active-grid-view', leaf: true },
                        { text: "Employees", access: 'admin', leaf: true }
                    ] },
                    { text: "Admin Undelete", access: 'admin', expanded: false, children: [
                        { text: "Users", access: 'admin', viewxtype: 'app-user-deleted-grid-view', leaf: true },
                        { text: "Employees", access: 'admin', leaf: true }
                    ] },
                    { text: "Admin  Tools", access: 'admin', expanded: false, children: [
                        { text: "Audit", access: 'admin', leaf: true }
                    ] }
                ]
            }

        });

        me.callParent();
        
    },

    listeners: {
        itemmousedown: 'onItemMouseDown'
    }

});
