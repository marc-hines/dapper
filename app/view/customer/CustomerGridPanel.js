
Ext.define("dapper.view.customer.CustomerGridPanel",{
    "extend": "Ext.grid.GridPanel",
    "controller": "customer-customergridpanel",
    "viewModel": {
        "type": "customer-customergridpanel"
    },

    // Use a BufferedRenderer plugin
    plugins: {
        ptype: 'bufferedrenderer'
    },
    
    requires: [
        'Ext.grid.*',
        'dapper.model.CustomerGridModel'
    ],
    xtype: 'app-customer-grid-panel',
    
    urlSuffix: null,

    itemId: 'CustomerGridPanel',
    scroll: 'vertical',

    initComponent: function(){

        var me = this;

        var restUrl = 'php/rest_api.php/customergrids/'+me.urlSuffix;

        var gridStore = Ext.create('Ext.data.Store', {
            extend: 'Ext.data.Store',
            xtype: 'app-customer-active-grid-store',
            requires: [
                'Ext.data.proxy.Rest'
            ],

            autoLoad: true,
            autoSync: true,
            autoDestroy: true,
            model: 'dapper.model.CustomerGridModel',
            proxy: {
                type: 'rest',
                url: restUrl,
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json'
                }
            }
        });

        var deleteButtonText = 'Delete Customer';
        if (me.urlSuffix == 'SHOW::DELETED') deleteButtonText = 'Undelete Customer';

        var deleteButton = Ext.create('Ext.Button', {
            text: deleteButtonText,
            itemId: 'DeleteButton',
            //iconCls: 'icon-delete',
            disabled: true,
            listeners: {
                click: function() {

                    var selection = me.getView().getSelectionModel().getSelection()[0];
                    if (selection) {
                        var store = me.getStore();
                        store.remove(selection);
                    }

                }
            }
        });

        var refreshButton = Ext.create('Ext.Button', {
            text: 'Refresh',
            itemId: 'RefreshButton',
            //iconCls: 'icon-refresh',
            listeners: {
                click: function() {
                    deleteButton.setDisabled(true);
                    gridStore.load();
                }
            }
        });

        var addButton = Ext.create('Ext.Button', {
            text: 'Add New Customer',
            itemId: 'AddButton',
            //iconCls: 'icon-add',
            listeners: {
                click: function() {
                    var viewId = 'CustomerEditView_New';
                    var tabpanel = dapper.refs.MainTabView;
                    var alreadyCreatedView = Ext.getCmp(viewId);
                    if (alreadyCreatedView == null) {
                        var view = Ext.create('dapper.view.customer.CustomerEditView', {
                            title: 'New Customer',
                            id: viewId,
                            customer_dbid: null});
                        tabpanel.add(view);
                        tabpanel.setActiveTab(view);
                    } else {
                        tabpanel.setActiveTab(alreadyCreatedView);
                    }
                }
            }
        });

        var columsLayout = [];

        columsLayout.push({
            text: 'Cust ID',
            flex: 1,
            sortable: true,
            dataIndex: 'customer_id'
        });

        columsLayout.push({
            text: 'Name',
            flex: 2,
            sortable: true,
            dataIndex: 'grid_name'
        });

        columsLayout.push({
            text: 'Address',
            flex: 2,
            sortable: true,
            dataIndex: 'grid_addr'
        });

        columsLayout.push({
            header: 'Phone',
            flex: 2,
            sortable: true,
            dataIndex: 'grid_phones'
        });

        columsLayout.push({
            header: 'Notes',
            flex: 2,
            sortable: true,
            dataIndex: 'customer_notes'
        });

        columsLayout.push({
            xtype: 'numbercolumn',
            format:'0,000',
            text: '# Invoices',
            flex: 1,
            sortable: true,
            dataIndex: 'view_invoice_count'
        });

        columsLayout.push({
            xtype: 'datecolumn',
            format: 'Y-m-d', 
            text: 'Last Invoice',
            flex: 1,
            sortable: true,
            dataIndex:'view_last_invoice_dt'
        });

        columsLayout.push({
            xtype: 'numbercolumn',
            format:'0,000',
            text: '# Jobs',
            flex: .7,
            sortable: true,
            dataIndex: 'view_job_count'
        });

        var dockedButtons = [];

        dockedButtons.push(refreshButton);
        dockedButtons.push('-');
        if (me.urlSuffix !== 'SHOW::DELETED') {
            dockedButtons.push(addButton);
        }
        dockedButtons.push({xtype: 'tbfill'});
        dockedButtons.push(deleteButton);

        Ext.apply(me, {
            store: gridStore,
            columns: columsLayout,

            dockedItems: [{
                xtype: 'toolbar',
                ui: 'footer',
                items: dockedButtons
            }],

            listeners: {
                select: function() {
                    deleteButton.setDisabled(false);
                },
                itemdblclick: function() {
                    if (me.urlSuffix !== 'SHOW::DELETED') {

                        var selection = me.getView().getSelectionModel().getSelection()[0];
                        if (selection) {

                            var tabpanel = dapper.refs.MainTabView;
                            var viewxtype = 'app-customer-edit-view';
                            var viewId = viewxtype+'_'+selection.data.customer_dbid;
                            var alreadyCreatedView = Ext.getCmp(viewId);
                            if (alreadyCreatedView == null) {
                                var view = Ext.create('dapper.view.customer.CustomerEditView', {
                                    title: 'Customer '+selection.data.customer_id,
                                    id: viewId,
                                    customerDbid: selection.data.customer_dbid});
                                tabpanel.add(view);
                                tabpanel.setActiveTab(view);
                            } else {
                                tabpanel.setActiveTab(alreadyCreatedView);
                            }
                        }
                    }
                }
            }

        });

        this.callParent();

    }
});
