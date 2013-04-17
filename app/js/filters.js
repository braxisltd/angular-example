'use strict';

/* Filters */

var filters = angular.module('myApp.filters', []);

filters.filter('interpolate', ['version', function (version) {
    return function (todos) {
        return _.filter(todos, function (todp) {
            return !todo.done;
        });
    }
}]);
