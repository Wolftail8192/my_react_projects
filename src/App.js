import React, {useState} from 'react';
import {Cars, Form} from  './Components'


function App  ()  {
    const [cars, setCars] = useState([]);




    return (
        <div>

            <Form/>
            <Cars />

        </div>
    );
}

export default App;