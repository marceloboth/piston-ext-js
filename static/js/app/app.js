Ext.Loader.setPath('Ext', './static/js/extjs-4.1.0/src');

Ext.Loader.setConfig({
    enabled          : true,
    disabledCaching  : true
});

Ext.require([
    'Ext.data.*',
    'Ext.Window',
    'Ext.layout.container.Fit',
    'Ext.container.Viewport'
]);

Ext.application({

    name : 'Erp',
    appFolder : 'static/js/app',
    controllers  : [
        'Grupo'
    ],

    autoCreateViewport: true

});