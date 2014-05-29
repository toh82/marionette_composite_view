/*global define*/

define([
    'underscore',
    'backbone',
    'models/Child'
], function (_, Backbone, ChildModel) {
    'use strict';

    return Backbone.Collection.extend({
        model: ChildModel
    });

});
