/*global define*/

define([
    'backbone',
    'collections/Children'
], function (Backbone, ChildCollection) {
    'use strict';

    return Backbone.Model.extend({
        url: '',
        initialize: function () {
            if (this.get('children').length !== 0) {
                var oChildCollection = new ChildCollection(this.get('children'),{
                    parent: this
                });

                this.set({
                    children: oChildCollection
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
