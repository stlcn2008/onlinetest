/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('OnlineTestClient.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [

    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'onlinetest',

    layout: 'border',

    items: [{
            xtype: 'problem',
            title: onlinetest.main.Problem,
            region: 'west',
            collapsible: true,
            width: '30%',
            split: {
                size: 10
            }
        }, {
            xtype: 'solution',
            title: onlinetest.main.Solution,
            region: 'center'
    }]

});
