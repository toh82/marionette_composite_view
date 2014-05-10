/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'text!templates/field.html'
], function ($, _, Backbone, Marionette, FieldTemplate) {
    'use strict';

    return Backbone.Marionette.ItemView.extend({
        template: _.template(FieldTemplate)
    });

});
