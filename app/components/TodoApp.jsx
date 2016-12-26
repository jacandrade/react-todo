var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass( {
    getInitialState: function (){
        return {
            showCompleted: false,
            searchText: '',
             todos: [
            {
                id: uuid(),
                text: 'Walk the dog',
                completed: true
            },
            {
                id: uuid(),
                text: 'Clean the yard',
                completed: true
            },
            {
                id: uuid(),
                text: 'Study',
                completed: false
            },
            {
                id: uuid(),
                text: 'Move to Surfers Paradise',
                completed: false
            },
        ]
        }
       
    },
    handleAddTodo: function (text) {
       this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: text,
                   completed: false
               }
           ]
       });
    },
    handleSearch: function (showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    handleToggle: function(id){
        var updateTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        
        this.setState({todos:updateTodos});
    },
    render: function (){
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAdd={this.handleAddTodo} />
            </div>
        );
    }

});

module.exports = TodoApp;