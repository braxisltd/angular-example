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
            input('todo.text').enter('todo 1');
            element('.add').click();
            input('todo.text').enter('todo 2');
            element('.add').click();
            expect(element('.todo').count()).toEqual(2);
            expect(element('.todo:eq(0)').text()).toEqual('todo 1');
            expect(element('.todo:eq(0)').text()).toEqual('todo 2');
        });

    });

//
//    describe('view2', function () {
//
//        beforeEach(function () {
//            browser().navigateTo('#/view2');
//        });
//
//
//        it('should render view2 when user navigates to /view2', function () {
//            expect(element('[ng-view] p:first').text()).
//                    toMatch(/partial for view 2/);
//        });
//
//    });
});
