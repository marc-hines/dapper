
Ext.define("dapper.view.job.JobDeletedGridView",{
    "extend": "dapper.view.job.JobGridPanel",
    "controller": "job-jobdeletedgridview",
    "viewModel": {
        "type": "job-jobdeletedgridview"
    },

    xtype: 'app-job-deleted-grid-view',
    title: 'Deleted Jobs',
    iconCls: 'icon-job',
    closable: true,
    itemId: 'JobDeletedGridPanel',
    urlSuffix: 'SHOW::DELETED'

});
