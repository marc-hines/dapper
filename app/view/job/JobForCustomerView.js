
Ext.define("dapper.view.job.JobForCustomerView",{
    "extend": "dapper.view.job.JobGridPanel",
    "controller": "job-jobforcustomerview",
    "viewModel": {
        "type": "job-jobforcustomerview"
    },

    xtype: 'app-job-for-customer-view',
    title: 'Customer Jobs',
    closable: false,
    customerDbid: null,

    initComponent: function(){

        var me = this;

        Ext.apply(me, {
            urlSuffix: 'CUSTOMER_DBID::' + me.customerDbid
        });

        me.callParent();

    }

});