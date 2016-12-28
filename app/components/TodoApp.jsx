var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass( {
    getInitialState: function (){
        return {
            showCompleted: false,
            searchText: '',
             todos: TodoAPI.getTodos()
            };
       
    },
    componentDidUpdate: function (){
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function (text) {
       
       this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: text,
                   completed: false,
                   createdAt: moment().unix()
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
    render: function (){
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo APP </h1>
                <div className="row">
                    <div className="column small-centered small-li medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList/>
                            <AddTodo  onAdd={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = TodoApp;