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
        
        filteredTodos = filteredTodos.filter((todo) => {
            
            return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;
        });

        filteredTodos = filteredTodos.sort((a, b) => {
            
            if(!a.completed && b.completed) {
                return -1;
            }else if(a.completed && !b.completed) {
                return 1;
            }else {
                return 0;
            }
        });
        return filteredTodos;
    }
};