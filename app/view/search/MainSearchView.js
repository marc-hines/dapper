
Ext.define("dapper.view.search.MainSearchView",{
    "extend": "Ext.panel.Panel",
    "xtype": "app-main-search-view",
    "controller": "search-mainsearchview",
    "viewModel": {
        "type": "search-mainsearchview"
    },
    title: 'Search',
    //iconCls: 'icon-search',
    closable: true,
    itemId: 'MainSearchView',

    "html": "Hello, World!!"
});
