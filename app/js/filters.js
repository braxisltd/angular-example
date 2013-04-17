'use strict';

/* Filters */

var filters = angular.module('myApp.filters', []);

filters.filter('activeTodo', function () {
    return function (todos) {
        return _.filter(todos, function (todo) {
            return !todo.done;
        });
    }
});
