'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/todo', {templateUrl: 'partials/todo.html', controller: 'ToDoCtrl'});
            $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
            $routeProvider.otherwise({redirectTo: '/todo'});
        }]);
