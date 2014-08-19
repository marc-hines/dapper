Ext.define('dapper.view.customer.CustomerEditPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customer-customereditpanel',
    
    OnSaveClick: function() {
    	var customerEditPanel = this.getView();
        if (customerEditPanel.isValid()) {
            customerEditPanel.updateRecord();
        }
    }

});
