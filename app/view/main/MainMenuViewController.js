Ext.define('dapper.view.main.MainMenuViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-mainmenuview',

    onItemMouseDown: function( model, record, index ) {
        var viewxtype = record.raw.viewxtype;
        if (viewxtype) {
            var tabpanel = dapper.refs.MainTabView;
            var alreadyCreatedView = Ext.getCmp(viewxtype);
            if (alreadyCreatedView == null) {
                var view = Ext.createByAlias('widget.'+viewxtype, {id: viewxtype});
                tabpanel.add(view);
                tabpanel.setActiveTab(view);
            } else {
                tabpanel.setActiveTab(alreadyCreatedView);
            }
        }
    }
    
});
