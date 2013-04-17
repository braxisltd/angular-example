'use strict';

describe('my app', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/index.html');
    });


    it('should automatically redirect to /todo when location hash/fragment is empty', function () {
        expect(browser().location().url()).toBe('/todo');
    });


    describe('todo', function () {

        beforeEach(function () {
            browser().navigateTo('#/todo');
        });


        it('should render todo when user navigates to /todo', function () {
            expect(element('.nav .active').text()).toEqual('TODO');
        });

        it('should start with no todos', function() {
            expect(element('.todo').count()).toEqual(0);
        });

        it('should add two todos', function() {
            input('todo').enter('todo 1');
            element('.add').click();
            input('todo').enter('todo 2');
            element('.add').click();
            expect(element('.todo').count()).toEqual(2);
            expect(element('.todo:eq(0)').text()).toEqual('todo 1');
            expect(element('.todo:eq(1)').text()).toEqual('todo 2');
        });

    });

});
