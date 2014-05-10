/*global define*/

define([
    'jquery',
    'marionette',
    'backbone',
    'views/Child',
    'text!templates/main.html'
], function ($, Marionette, Backbone, ChildView, MainTemplate) {
    'use strict';

    return Backbone.Marionette.CompositeView.extend({
        template: _.template(MainTemplate),
        itemView: ChildView,
        itemViewContainer: '.options',
        initialize: function () {

        },
        onRender: function () {

        }
    });
    
});
