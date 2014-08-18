Ext.define('dapper.store.JobFrequencyStore', {
    extend: 'Ext.data.Store',
    xtype: 'app-job-frequency-Store',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    autoLoad: true,
    autoSync: false,
    autoDestroy: false,
    storeId: 'JobFrequencyStore',
    model: 'dapper.model.JobFrequencyModel',
    proxy: {
        type: 'rest',
        url: 'php/rest_api.php/jobfrequencies/SHOW::ACTIVE',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }

});
