/*global define*/

define([
    'underscore',
    'backbone',
    'models/Child'
], function (_, Backbone, ChildModel) {
    'use strict';

    var ChildrenCollection = Backbone.Collection.extend({
        model: ChildModel
    });

    return ChildrenCollection;
});
