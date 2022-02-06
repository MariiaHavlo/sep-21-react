import React, {FC} from 'react';
import {ICar} from "../../interfaces";

const Car: FC<{ car: ICar }> = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div>
            <div>Id:{id}</div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
        </div>
    );
};

export default Car;