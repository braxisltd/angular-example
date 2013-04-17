'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', []);
services.factory('TextConvertor', function () {
    var converter = new Showdown.converter();
    return {
        convert: function (text) {
            return converter.makeHtml(text);
        }
    }
});
