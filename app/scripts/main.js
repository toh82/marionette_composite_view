/*global require*/
'use strict';

require.config({
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        marionette: {
            deps: [
                'backbone'
            ],
            exports: 'Marionette'
        },
        underscore: {
            exports: '_'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text',
        requirejs: '../bower_components/requirejs/require',
        modernizr: '../bower_components/modernizr/modernizr',
        marionette: '../bower_components/marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'requirejs-text': '../bower_components/requirejs-text/text',
        'backbone.marionette': '../bower_components/marionette/lib/core/amd/backbone.marionette'
    }
});

require([
    'App',
    'backbone'
], function (App, Backbone) {
    App.start();
});
