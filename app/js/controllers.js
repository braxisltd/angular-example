'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', []);

controllers.controller('ToDoCtrl', ['$scope', function ($scope) {
    $scope.todos = [];
    $scope.add = function () {
        $scope.todos.push({text:$scope.todo});
        $scope.todo = '';
    };
}]);

controllers.controller('TabCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.tabClass = function (tab) {
        if ($location.path().indexOf(tab) > -1) return 'active';
        else return '';
    };
}]);

controllers.controller('BindingCtrl', ['$scope', function ($scope) {
    $scope.fromController = 'from controller';
}]);