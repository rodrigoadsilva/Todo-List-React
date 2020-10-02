import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType'
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    title: yup.string().required('Invalid task'),
});

interface AddTodoForm {
    title: string
}

const AddTodo = () => {

    const { addTodo } = useContext<TodoContextType>(TodoContext);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title);
        e.target.reset();
        window.location.href = '/';
    }

    return(
        <div className="uk-container">
            <div className="uk-flex uk-flex-right">
                <Link to="/"><button className="uk-button uk-button-small uk-button-danger">Cancel</button></Link>
            </div>
            <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
                <h4>New task</h4>
                <div className="uk-margin uk-width-1-1">
                    <input type="text" name="title" id="title" placeholder="Coding a to-do list..." className="uk-input" ref={register} />
                    <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
                </div>
                <div className="uk-width-1-1">
                    <button type="submit" className="uk-button uk-button-primary">Register</button>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;