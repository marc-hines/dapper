Ext.define('dapper.store.InvoiceBehaviorStore', {
    extend: 'Ext.data.Store',
    xtype: 'app-invoice-behavior-Store',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    autoLoad: true,
    autoSync: false,
    autoDestroy: false,
    storeId: 'InvoiceBehaviorStore',
    model: 'dapper.model.InvoiceBehaviorModel',
    proxy: {
        type: 'rest',
        url: 'php/rest_api.php/invoicebehaviors/SHOW::ACTIVE',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }

});
