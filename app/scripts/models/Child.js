/*global define*/

define([
    'underscore',
    'backbone',
    'collections/Fields'
], function (_, Backbone, FieldsCollection) {
    'use strict';

    return Backbone.Model.extend({
        initialize: function () {
            if (this.get('children').length !== 0) {
                var oFieldCollection = new FieldsCollection(this.get('children'),{
                    parent: this
                });

                this.set({
                    children: oFieldCollection
                });
            }
        }
    });
});
