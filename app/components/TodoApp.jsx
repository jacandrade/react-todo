var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass( {
    getInitialState: function (){
        return {
            showCompleted: false,
            searchText: '',
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
    handleAddTodo: function (text) {
        alert('newTodo' + text);
    },
    handleSearch: function (showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function (){
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onAdd={this.handleAddTodo} />
            </div>
        );
    }

});

module.exports = TodoApp;