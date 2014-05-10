/*global define*/

define([
    'underscore',
    'backbone',
    'models/Child'
], function (_, Backbone, ChildrenModel) {
    'use strict';

    var ChildrenCollection = Backbone.Collection.extend({
        model: ChildrenModel
    });

    return ChildrenCollection;
});
