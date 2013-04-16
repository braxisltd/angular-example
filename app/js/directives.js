'use strict';

/* Directives */


var directives = angular.module('myApp.directives', []);

directives.directive('markDown', ['MarkDown', function (MarkDown) {
    return {
        restrict:'E',
        replace:true,
        transclude:true,
        template:'<section></section>'

    }
}]);
