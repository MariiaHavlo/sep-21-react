import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../store/todo.slice";

const Item = ({item:{id,name}}) => {
    const dispatch = useDispatch()
    return (
        <div>
            {name}

            <button onClick={()=>dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export default Item;