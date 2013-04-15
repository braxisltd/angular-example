'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', []);

controllers.controller('ToDoCtrl', ['$scope', function ($scope) {

}]);

controllers.controller('TabCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.tabClass = function (tab) {
        if ($location.path().indexOf(tab) > -1) return 'active';
        else return '';
    };
}]);

controllers.controller('MyCtrl2', [function () {

}]);