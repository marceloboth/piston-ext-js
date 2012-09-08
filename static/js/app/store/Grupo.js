Ext.define('Erp.store.Grupo', {
			extend : 'Ext.data.Store',

			model : 'Erp.model.Grupo',
			autoLoad : true,
			autoSync : true,
			pageSize : 30,

			proxy : {
				type : 'rest',

				api : {
					read : '/api/grupos/',
					create : '/api/grupos/create',
					update : '/api/grupos/update',
					destroy : '/api/grupos/delete'
				},

				reader : {
					type : 'json',
					root : 'data',
					successProperty : 'success',
					totalProperty : 'total'
				},

				writer : {
					type : 'json',
					root : 'data'
				},

				listeners : {
					exception : function(proxy, response, operation) {
						var message = Ext.JSON.decode(response.responseText).message;
						Ext.Msg.alert('Ocorreu um erro', message);
					}
				}
			}
		});