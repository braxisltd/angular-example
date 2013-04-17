'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/binding', {templateUrl: 'partials/binding.html', controller: 'BindingCtrl'});
            $routeProvider.when('/todo', {templateUrl: 'partials/todo.html', controller: 'ToDoCtrl'});
            $routeProvider.when('/md', {templateUrl: 'partials/md.html'});
            $routeProvider.otherwise({redirectTo: '/todo'});
        }]);
