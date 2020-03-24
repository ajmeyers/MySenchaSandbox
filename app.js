/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MySenchaSandbox.Application',

    name: 'MySenchaSandbox',

    requires: [
        // This will automatically load all classes in the MySenchaSandbox namespace
        // so that application classes do not need to require each other.
        'MySenchaSandbox.*'
    ],

    // The name of the initial view to create.
    mainView: 'MySenchaSandbox.view.main.Main'
});
