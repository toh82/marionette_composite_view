/*global define*/

define([
    'underscore',
    'backbone',
    'collections/Fields'
], function (_, Backbone, FieldsCollection) {
    'use strict';

    return Backbone.Model.extend({
        initialize: function () {
            var oFieldCollection = new FieldsCollection(this.get('children'));
            if (this.get('children').length !== 0) {
                this.set({
                    children: oFieldCollection
                }, {
                    parent: this
                });
            }
        }
    });
});
