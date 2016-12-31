import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

export class TodoApp extends React.Component {
    onLogout(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch(actions.startLogout());
    }
    render(){
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
                </div>
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

};

export default Redux.connect()(TodoApp);