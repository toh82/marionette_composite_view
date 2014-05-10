/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'views/field',
    'text!templates/child.html'
], function ($, _, Backbone, Marionette, FieldView, ChildTemplate) {
    'use strict';

    return Backbone.Marionette.CompositeView.extend({
        template: _.template(ChildTemplate),
        tagName: 'li',
        className: 'option',
        itemView: FieldView,
        itemViewContainer: '.fields',
        initialize: function () {
            this.collection = this.model.get('children');
        }
    });

});
