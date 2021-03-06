define([
    'underscore',
    'backbone',
    'models/<%= pathToModel %><%= name %>'
], function(_,
    Backbone,
    <%= _.classify(name) %>Model) {

    'use strict';

    var <%= _.classify(name) %>Collection = Backbone.Collection.extend({
        model: <%= _.classify(name) %>Model
    });

    return <%= _.classify(name) %>Collection;
});