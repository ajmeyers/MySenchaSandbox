/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MySenchaSandbox.view.main.SimpleDragController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.drag-simple',
    afterRender: function (view) {
        this.source = new Ext.drag.Source({
            element: view.el.down('.simple-source'),
            constrain: view.body,

            listeners: {
                dragmove: function (source, info) {
                    var pos = info.element.current,
                        html;

                    html = Ext.String.format(
                        'X: {0}<br>Y: {1}',
                        Ext.Number.roundToPrecision(pos.x, 2),
                        Ext.Number.roundToPrecision(pos.y, 2)
                    );

                    source.getElement().setHtml(html);
                },

                dragend: function (source) {
                    source.getElement().setHtml('Drag Me!');
                }
            }
        });
    },

    destroy: function () {
        this.source = Ext.destroy(this.source);

        this.callParent();
    }

});
