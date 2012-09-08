Ext.define('Erp.view.Viewport', {
    extend: 'Ext.container.Viewport',
 
    layout: 'border',
    padding: 5,
 
    items: [{
        xtype: 'container',
        html: 'ExtBlog by Bruno Tavares',
        region: 'north',
        height:40
    },{
        xtype: 'tabpanel',
        region: 'center',
        items: [{
            title: 'Posts',
            html: '...here goes the posts...'
        },{
            title: 'Post 1',
            html: '...post 1...'
        }]
    },{
        xtype: 'panel',
        region: 'east',
        html: '...here goes additional resources...',
        split: true,
        width: 400
    }]
});

/*
launch : function() {
				viewport = Ext.create('Ext.container.Viewport', {
							id : 'viewport',
							layout : false,
							autoScroll : true,
							itens : [{
										region : 'center',
										border : false,
										autoScroll : true,
										itens : [{
													xtype : 'grupoGrid',
													store : 'Grupos'
												}]
									}]
						});
			}
*/