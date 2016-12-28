var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass( {
    render: function (){
        return (
            <div>
                <h1 className="page-title">Todo APP </h1>
                <div className="row">
                    <div className="column small-centered small-li medium-6 large-5">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = TodoApp;