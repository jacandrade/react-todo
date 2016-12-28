var expect = require('expect');
var df = require('deep-freeze-strict');

var Reducers = require('reducers');


describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Test'
            };
            var res = Reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('show that the showCompletedStatus is flipped', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = Reducers.showCompletedReducer(df(true), df(action));

            expect(res).toEqual(false);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            
            var action = {
                type: 'ADD_TODO',
                text: 'some string'
            };

            var res = Reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle completed when given id', () => {
            
            var state = [{
                   id: 1,
                   text: 'test',
                   completed: true,
                   createdAt: 123,
                   completedAt: 124
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };

            var res = Reducers.todosReducer(df(state), df(action));

            expect(res[0].completedAt).toEqual(undefined);
            expect(res[0].completed).toEqual(false);
        });
    });
});