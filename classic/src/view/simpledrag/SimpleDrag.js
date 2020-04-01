/**
 * This example shows how to setup a simple drag for an element.
 */
Ext.define('MySenchaSandbox.view.simpledrag.SimpleDrag', {
    extend: 'Ext.panel.Panel',
    xtype: 'drag-simple',
    controller: 'drag-simple',
    border: "1px",
    width: 800,
    height: 500,
    title: 'Warzone',
    bodyPadding: 5,

    html: '<img class="simple-source" src="classic/resources/imgs/bewd.png" alt="Blue-Eyes White Dragon">'
});

