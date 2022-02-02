import React, {useState} from 'react';
import {Cars, Form} from  './Components'


function App  ()  {
    const [cars, setCars] = useState([]);


    const getCarId = (id) => {
        setCars(cars.filter(car => car.id !== id))

    }

    return (
        <div>

            <Form/>
            <Cars getCarId={getCarId}/>

        </div>
    );
}

export default App;