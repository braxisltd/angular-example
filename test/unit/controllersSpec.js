'use strict';

/* jasmine specs for controllers go here */

describe('ToDoCtrl', function () {

    var scope , controller;

    beforeEach(module('myApp.controllers'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('ToDoCtrl', {$scope: scope});
    }));

    it('todos should initially be empty', function () {
        expect(scope.todos.length).toEqual(0);
    });

    it('should ....', inject(function () {
        var message = 'new message';
        scope.todo = message;
        scope.add();
        expect(scope.todos[0].text).toEqual(message);
        expect(scope.todo).toEqual('');
    }));
});
