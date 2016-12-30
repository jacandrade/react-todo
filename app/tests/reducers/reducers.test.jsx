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
                todo: {
                    id:'123',
                    text: 'test',
                    completed: false,
                    createdAt: 98565
                }
            };

            var res = Reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should UPDATE_TODO when given id', () => {
            
            var todos = [{
                   id: 1,
                   text: 'test',
                   completed: true,
                   createdAt: 123,
                   completedAt: 124
            }];
            var updates = {
                completed: false,
                completedAt: null
            };
            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };

            var res = Reducers.todosReducer(df(todos), df(action));

            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].text).toEqual(todos[0].text);
        });

        it('should add existing todos', () => {
            var todos =[{
                id:'111',
                text:'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            };

            var res = Reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(todos.length);
            expect(res[0]).toEqual(todos[0]);
        });
    });

    describe('authReducer', () => {
        it('should store uid on LOGIN', () => {
            var action = {
                type: 'LOGIN',
                uid: '123'
            };
            var res = Reducers.authReducer(undefined, df(action));

            expect(res).toEqual({uid:action.uid});
        });

        it('should whipe auth on LOGOUT', () => {
           
            var res = Reducers.authReducer(undefined, df({type:'LOGOUT'}));

            expect(res).toEqual({});
        });
    });
});