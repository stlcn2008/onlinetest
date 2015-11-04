/**
 * Created by tony on 2015/10/29.
 */
Ext.define('OnlineTestClient.view.guide.Guide', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.button.Button',
        'OnlineTestClient.view.guide.GuideController',
        'OnlineTestClient.view.guide.GuideModel'
    ],
    xtype: 'guide',
    viewModel: {
        type: 'guide'
    },

    controller: 'guide',
    items: [{
            xtype: 'component',
            region: 'center',
            width: '100%',
            height: '100%',
            padding: '20',
            tpl:[
                '<h2>{[onlinetest.guide.Greeting]}</h2>',
                '<pre>{[onlinetest.guide.Content]}</pre>',
                '<h2>{[onlinetest.guide.SpecialPrompt]}</h2>'
            ],

             bind: {
                 data: '{guide}'
             }

        }],

    bbar: [{
        xtype: 'button',
        width: 150,
        text: onlinetest.guide.Next,
        handler: 'onNext'
    }]
});