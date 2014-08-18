
Ext.define("dapper.view.main.MainTabView",{
    "extend": "Ext.tab.Panel",
    "xtype": "app-main-tab-view",
    "controller": "main-maintabview",
    "viewModel": {
        "type": "main-maintabview"
    },

    requires:[
        'Ext.tab.Panel'
    ],

    initComponent: function() {

        me = this;

        dapper.refs.MainTabView = me;

        me.callParent();
        
    }
});
