'use strict';

/* jasmine specs for filters go here */

describe('filter', function () {
    beforeEach(module('myApp.filters'));

    it('should allow only incomplete todos', inject(function (activeTodoFilter) {
        var todos = [
            {text: "not done", done: false},
            {text: "done", done: true},
            {text: "undefined"}
        ];
        expect(activeTodoFilter(todos).length).toEqual(2);
    }));
});
