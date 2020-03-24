/**
 * Demonstrates a basic window control.
 */
Ext.define('MySenchaSandbox.view.basicwindow.BasicWindow', {
    extend: 'Ext.window.Window',
    xtype: 'basicwindow',

    autoShow: true,  // Required to Show Window!
    height: 400,
    width: 400,
    title: 'Window',
    scrollable: true,
    bodyPadding: 10,
    html: '<h1>Welcome to my Window</h1>',
    constrain: true,
    closable: false
});