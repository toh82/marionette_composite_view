/*global define*/

define([
    'underscore',
    'backbone',
    'models/Field'
], function (_, Backbone, FieldModel) {
    'use strict';

    return Backbone.Collection.extend({
        model: FieldModel
    });

});
