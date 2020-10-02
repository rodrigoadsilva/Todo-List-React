import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);
    return(
        <table className="uk-table">
            <caption>Task List</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id} todo={todo}/>)
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;