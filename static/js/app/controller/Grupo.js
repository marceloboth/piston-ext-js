Ext.define('Erp.controller.Grupo', {
    extend:'Ext.app.Controller',

    models:['Grupo'],
    stores:['Grupo'],
    views:['grupo.Grid'],

    init:function () {
        this.control({
            'grupoGrid button[action=adicionar]':{
                click:this.adicionar
            },
            'grupoGrid button[action=deletar]':{
                click:this.deletar
            }
        });
    },

    adicionar:function (button) {
        button.up('grid').getStore().insert(0, this.getModel('Grupo').create());
    },

    deletar:function (button) {
        var grid = button.up('grid'), store = grid.getStore(), record = grid
            .getSelectionModel().getSelection()[0];

        if (record) {
            if (confirm('Tem certeza?')) {
                store.remove(record);
            }
        }
    }
});