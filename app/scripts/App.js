define([
        'jquery',
        'backbone',
        'marionette',

        'collections/Children',
        'models/Child',
        'models/Base',
        'views/MainComposite'
    ],
    function ($, Backbone, Marionette, ChildCollection, ChildModel, BaseModel, MainCompositeView) {
        'use strict';
        
        var testdata = {
            children: [
                {
                    title: 'option 1',
                    price: 5,
                    children: [
                        {
                            name: 'firstname',
                            required: true,
                            value: '',
                            placeholder: 'Frist name'
                        },
                        {
                            name: 'lastname',
                            required: true,
                            value: '',
                            placeholder: 'Last name'
                        }
                    ]
                },
                {
                    title: 'option 2',
                    price: 10,
                    children: [
                        {
                            name: 'firstname',
                            required: true,
                            value: '',
                            placeholder: 'Frist name'
                        },
                        {
                            name: 'lastname',
                            required: true,
                            value: '',
                            placeholder: 'Last name'
                        }
                    ]
                }
            ]
        };

        var App = new Backbone.Marionette.Application();

        App.addRegions({
            baseRegion:".container"
        });

        App.addInitializer(function (options) {
            Backbone.history.start();
        });

        var oBaseModel = new BaseModel(testdata);

        App.baseRegion.show(
            new MainCompositeView({
                model: oBaseModel,
                collection: oBaseModel.get('children')
            })
        );

        return App;
    }
);