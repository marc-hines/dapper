Ext.define('dapper.store.MessageStore', {
    extend: 'Ext.data.Store',
    xtype: 'app-message-Store',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    autoLoad: true,
    autoSync: false,
    autoDestroy: false,
    storeId: 'MessageStore',
    model: 'dapper.model.MessageModel',
    proxy: {
        type: 'rest',
        url: 'php/rest_api.php/messages/SHOW::ACTIVE',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }

});
