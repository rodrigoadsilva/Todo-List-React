import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TodoContext from '../contexts/TodoContext';
import AddTodo from './AddTodo';
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
    return(
        <TodoContext>
            <Router>
                <Navbar/>
                <br />
                <div className="uk-container">
                    <Switch>
                        <Route path="/create">
                            <AddTodo/>
                        </Route>
                        <Route path="/">
                            <h2>My To-Do List</h2>
                            <TodoList/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </TodoContext>
    );
}

export default App;