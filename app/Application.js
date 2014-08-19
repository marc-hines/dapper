/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('dapper.Application', {
    extend: 'Ext.app.Application',
    
    name: 'dapper',

    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.validator.*'
    ],

    views: [
        'user.UserActiveGridView',
        'user.UserDeletedGridView',
        'job.JobGridPanel',
        'job.JobActiveGridView',
        'job.JobDeletedGridView',
        'job.JobForCustomerView',
        'job.JobEditPanel',
        'job.JobEditView',
        'jobcode.JobcodeActiveGridView',
        'jobcode.JobcodeDeletedGridView',
        'message.MessageActiveGridView',
        'message.MessageDeletedGridView',
        'customer.CustomerActiveGridView',
        'customer.CustomerDeletedGridView',
        'customer.CustomerActiveGridView',
        'customer.CustomerEditPanel',
        'customer.CustomerEditView',
        'receivables.ReceivablesGridView',
        'receivables.CollectionGridView',
        'receivables.CollectionSummaryGridView',
        'receivables.ReceivablesCustomerEditPanel',
        'search.MainSearchView',
        'widget.TextArea'
    ],

    stores: [
        'JobFrequencyStore',
        'InvoiceFrequencyStore',
        'InvoiceBehaviorStore',
        'MessageStore'
    ],
    
    controllers: [
        'MainController'
    ],

    launch: function () {
        // TODO - Launch the application
    }
});
