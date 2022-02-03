import React from 'react';
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
import css from "./App.module.css";



const App = () => {
    return (
        <div>
            <div className={css.form}>
                <Form/>
            </div>
            <div className={css.Todos}>
                <Todos/>
            </div>
        </div>
    );
};

export default App;