var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass( {
    getInitialState: function (){
        return {
             todos: [
            {
                id: 1,
                text: 'Walk the dog'
            },
            {
                id: 2,
                text: 'Clean the yard'
            },
            {
                id: 3,
                text: 'Study'
            },
            {
                id: 4,
                text: 'Move to Surfers Paradise'
            },
        ]
        }
       
    },
    handleAddTodo (text) {
        alert('newTodo' + text);
    },
    render: function (){
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onAdd={this.handleAddTodo} />
            </div>
        );
    }

});

module.exports = TodoApp;