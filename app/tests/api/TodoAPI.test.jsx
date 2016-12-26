var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(()=> {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('set todos', () => {
        it('should set valid todos array', () => {
            var todos = [{id:1, text:'testing component', completed: false}];

            TodoAPI.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badData = {a: 'b'}
            TodoAPI.setTodos(badData);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('get todos', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in local storage', ()=> {
            var todos = [{id:1, text:'testing component', completed: false}];
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });
});
