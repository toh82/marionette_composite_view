/*global define*/

define([
    'backbone',
    'collections/Children'
], function (Backbone, ChildrenCollection) {
    'use strict';

    return Backbone.Model.extend({
        url: '',
        initialize: function () {
            var oChildrenCollection = new ChildrenCollection(this.get('children'));
            if (this.get('children').length !== 0) {
                this.set({
                    children: oChildrenCollection
                }, {
                    parent: this
                });
            }
        },

        defaults: {
            title: 'Testing nested models/collections and composite view',
            description: 'build by Tobias Hartmann as a test of marionettes composite views',
            children: {}
        }
    });

});
