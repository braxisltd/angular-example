'use strict';

/* Directives */


var directives = angular.module('myApp.directives', ['myApp.services']);

directives.directive('markdown', ['TextConvertor', function (TextConvertor) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {},
        template:
            '<section>' +
            '<div><textarea ng-model="md"></textarea></div>' +
            '<div ng-bind-html-unsafe="mu"></div>' +
            '</section>',
        link: function (scope, element, attrs) {
            scope.md='';
            scope.$watch('md', function (md) {
                scope.mu = TextConvertor.convert(md);
            });
        }
    }
}]);
