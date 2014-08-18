
Ext.define("dapper.view.customer.CustomerDeletedGridView",{
    "extend": "dapper.view.customer.CustomerGridPanel",
    "controller": "customer-customerdeletedgridview",
    "viewModel": {
        "type": "customer-customerdeletedgridview"
    },

    xtype: 'app-customer-deleted-grid-view',
    title: 'Deleted Customers',
    //iconCls: 'icon-customer',
    closable: true,
    itemId: 'CustomerDeletedGrid',
    urlSuffix: 'SHOW::DELETED'

});