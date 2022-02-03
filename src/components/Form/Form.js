import React from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../store";

const Form = () => {
    const dispatch = useDispatch();
    const submit = (x) => {
        x.preventDefault()
        dispatch(addTodo({todo: x.target.todo.value}))
        x.target.reset()
    }

    return (
        <form onSubmit={submit}>
            <input type="text" name={'todo'}/>
            <button>Save</button>
        </form>
    );
};

export default Form;