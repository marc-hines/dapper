Ext.define('dapper.model.MessageModel', {
    extend: 'Ext.data.Model',
    xtype: 'app-Message-model',
    
    fields: [{
        name: 'message_dbid', type: 'string'
    }, {
        name: 'message_id', type: 'string'
    }, {
        name: 'message_desc', type: 'string'
    }, {
        name: 'message_deleted_sw', type: 'string'
    }, {
        name: 'message_deleted_dt', type: 'string'
    }],

    validators: {
        message_id: 'presence',
        message_desc: 'presence'
    }
});
