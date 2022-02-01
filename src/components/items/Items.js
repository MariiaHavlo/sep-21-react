import React from 'react';
import {useSelector} from "react-redux";

const Items = () => {

    const items = useSelector(state =>state['todoReducer'])
    return (
        <div>
            {items.map(item =><Item key = {item.id} car={car}/>)}
        </div>
    );
};

export default Items;