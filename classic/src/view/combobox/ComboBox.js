/**
 * This example illustrates a combo box which querys a remote data source.
 */
Ext.define('MySenchaSandbox.view.combobox.ComboBox', {
    extend: 'Ext.form.Panel',
    xtype: 'remote-combo',

    profiles: {
        classic: {
            labelWidth: 110,
            anchor: '-15'
        },
        neptune: {
            labelWidth: 110,
            anchor: '-15'
        },
        graphite: {
            labelWidth: 140,
            anchor: '-15'
        },
        'classic-material': {
            labelWidth: 140,
            anchor: '0'
        }
    },
    title: 'Remote Query ComboBox',
    width: 500,
    border: "1px",
    layout: 'form',
    cls: 'simple-combo remote-combo',
    viewModel: {},

    items: [{
        xtype: 'fieldset',
        layout: 'anchor',
        fieldDefaults: {
            labelWidth: 110
        },
        items: [{
            xtype: 'component',
            anchor: '100%',
            html: [
                '<h3>Remote query mode</h3>',
                '<p>This ComboBox uses <code>queryMode: "remote"</code> ',
                'to perform the query on a remote API which returns states ',
                'that match the typed string.</p>',
                '<p><b>Bug: remote-states alias (store) not recognized</b></p>'
            ]
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Selected State',
            bind: '{states.value}'
        }, {
            xtype: 'combobox',
            reference: 'states',
            publishes: 'value',
            fieldLabel: 'Select State',
            displayField: 'state',
            anchor: "-15",
            store: {
                type: 'personnel'
            },

            // We're forcing the query to run every time by setting minChars to 0
            // (default is 4)
            minChars: 0,
            queryParam: 'q',
            queryMode: 'remote'
        }]
    }]
});