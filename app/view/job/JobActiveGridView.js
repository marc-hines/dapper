
Ext.define("dapper.view.job.JobActiveGridView",{
    "extend": "dapper.view.job.JobGridPanel",
    "controller": "job-jobactivegridview",
    "viewModel": {
        "type": "job-jobactivegridview"
    },

    xtype: 'app-job-active-grid-view',
    title: 'Active Jobs',
    iconCls: 'icon-job',
    closable: true,
    itemId: 'JobActiveGridPanel',
    urlSuffix: 'SHOW::ACTIVE'

});