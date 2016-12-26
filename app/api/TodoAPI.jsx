var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            todos;
        }
    },
    getTodos: function() {

        var todos = [];

        try{
            todos = JSON.parse(localStorage.getItem('todos'));
        }catch (e){
            console.log(e);
        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, completed, searchText){
        
        var filteredTodos = todos;

        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || completed;
        });

        return filteredTodos;
    }
};