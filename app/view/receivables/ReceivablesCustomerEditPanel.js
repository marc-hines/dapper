
Ext.define("dapper.view.receivables.ReceivablesCustomerEditPanel",{
    "extend": "Ext.grid.GridPanel",
    "controller": "receivables-receivablescustomereditpanel",
    "viewModel": {
        "type": "receivables-receivablescustomereditpanel"
    },

    // Use a BufferedRenderer plugin
    plugins: {
        ptype: 'bufferedrenderer'
    },
    
    requires: [
        'Ext.grid.*',
        'dapper.model.ReceivablesGridModel'
    ],

    xtype: 'app-receivables-customer-edit-panel',
    
    customerDbid: null,

    title: 'Customer Receivables',
    itemId: 'ReceivablesCustomerEditGrid',
    scroll: 'vertical',

    initComponent: function(){

        var gridStore = Ext.create('Ext.data.Store', {
            extend: 'Ext.data.Store',
            xtype: 'app-receivables-grid-store',
            requires: [
                'Ext.data.proxy.Rest'
            ],

            autoLoad: true,
            autoSync: true,
            autoDestroy: true,
            model: 'dapper.model.ReceivablesGridModel',
            proxy: {
                type: 'rest',
                url: 'php/rest_api.php/receivables/DBID::'+this.customerDbid,
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json'
                }
            },
            groupField: 'customer_id'
        });

        Ext.apply(this, {
            store: gridStore,
            columns: [{
                text: 'Invoice',
                flex: 1,
                sortable: true,
                dataIndex: 'invoice_id'
            }, {
                xtype: 'datecolumn',
                format: 'Y-m-d', 
                text: 'Date',
                flex: 1,
                sortable: true,
                dataIndex:'invoice_dt'
            }, {
                text: 'Desc',
                flex: 2,
                sortable: true,
                dataIndex: 'invoice_desc'
            }, {
                xtype: 'numbercolumn',
                format:'0,000.00',
                text: 'Invoice Amt',
                flex: 1,
                sortable: true,
                dataIndex: 'invoice_total_amt'
            }, {
                xtype: 'numbercolumn',
                format:'0,000.00',
                text: 'Current',
                flex: 1,
                sortable: true,
                dataIndex: 'blank_balance_current'
            }, {
                xtype: 'numbercolumn',
                format:'0,000.00',
                text: 'Due 31-60',
                flex: 1,
                sortable: true,
                dataIndex: 'blank_balance_31_60'
            }, {
                xtype: 'numbercolumn',
                format:'0,000.00',
                text: 'Due 61-90',
                flex: 1,
                sortable: true,
                dataIndex: 'blank_balance_61_90'
            }, {
                xtype: 'numbercolumn',
                format:'0,000.00',
                text: 'Due 91-120',
                flex: 1,
                sortable: true,
                dataIndex: 'blank_balance_91_120'
            }, {
                xtype: 'numbercolumn',
                format:'0,000.00',
                text: 'Over 120',
                flex: 1,
                sortable: true,
                dataIndex: 'blank_balance_over_120'
            }, {
                xtype: 'numbercolumn',
                format:'0,000',
                text: 'Days Old',
                flex: 1,
                sortable: true,
                hidden: true,
                dataIndex: 'view_days_aged'
            }],

            dockedItems: [{
                xtype: 'toolbar',
                ui: 'footer',
                items: [{
                    text: 'Refresh',
                    itemId: 'ReceivablesGridRefreshButton',
                    //iconCls: 'icon-refresh',
                    listeners: {
                        click: function() {
                            gridStore.load();
                        }
                    }
                }]
            }]
        });

        this.callParent();

    }
});