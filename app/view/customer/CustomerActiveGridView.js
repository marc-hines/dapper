
Ext.define("dapper.view.customer.CustomerActiveGridView",{
    "extend": "dapper.view.customer.CustomerGridPanel",
    "controller": "customer-customeractivegridview",
    "viewModel": {
        "type": "customer-customeractivegridview"
    },

    xtype: 'app-customer-active-grid-view',
    title: 'Active Customers',
    //iconCls: 'icon-customer',
    closable: true,
    itemId: 'CustomerActiveGrid',
    urlSuffix: 'SHOW::ACTIVE'

});