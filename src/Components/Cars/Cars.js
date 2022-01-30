import React from 'react';

const Cars = ({cars, getCarId}) => {
    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car} getCarId={getCarId}/>)}
        </div>
    );
};

export default Cars;