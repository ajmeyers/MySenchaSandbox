/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MySenchaSandbox.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MySenchaSandbox.view.main.MainController',
        'MySenchaSandbox.view.main.MainModel',
        'MySenchaSandbox.view.main.List',
        "MySenchaSandbox.view.basicwindow.BasicWindow",
        "MySenchaSandbox.view.main.BasicWindowController",
        "MySenchaSandbox.view.simpledrag.SimpleDrag",
        "MySenchaSandbox.view.main.SimpleDragController",
        "MySenchaSandbox.view.combobox.ComboBox"

    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    // Tab Views

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'My Layout',
        iconCls: 'fa-columns',
        // bind: {
        //     html: '{loremIpsum}'
        // },
        items: [{
            xtype: 'layout-border',
        }]
    }, {

        title: 'My Window',
        iconCls: 'fa-window-maximize',
        items: [{
            xtype: 'basicwindow'
        }],
    }, {

        title: 'Warzone',
        iconCls: 'fa-dragon',
        items: [{
            xtype: 'drag-simple'
        }],
    }, {

        title: 'My Combobox',
        iconCls: 'fa-bars',
        items: [{
            xtype: 'remote-combo'
        }],
        // bind: {
        //     html: '{loremIpsum}'
        // }
        // }, {
        //     title: 'Settings',
        //     iconCls: 'fa-cog',
        //     bind: {
        //         html: '{loremIpsum}'
        //     }
    }]
});




/* My Test Components */

/**
 * Demonstrates usage of a border layout.
 */
Ext.define('MySenchaSandbox.view.layout.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border'
    ],
    profiles: {
        classic: {
            itemHeight: 100
        },
        neptune: {
            itemHeight: 100
        },
        graphite: {
            itemHeight: 120
        },
        'classic-material': {
            itemHeight: 120
        }
    },
    layout: 'border',
    width: 500,
    height: 400,
    cls: Ext.baseCSSPrefix + 'shadow',

    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [
        {
            title: 'Footer',
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<h1>This is my footer content</h1>'
        },
        {
            title: 'Navigation',
            region: 'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 150,
            maxWidth: 250,
            html: '<a href="https://google.com">Google</a><br><br><a href="https://www.sencha.com/products/extjs/">Sencha 7.0.0</a>'
        },
        {
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            html: '<h2>I am some text!</h2>'

        }
    ]

});
