import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../store/todo.slice";


const Item = ({item:{id,name}}) => {

    const dispatch = useDispatch()
    return (
        <div>
            <form>
                <input type="checkbox" id={id}/>
                {name}

                <button onClick={()=>dispatch(deleteTodo({id}))}>Delete</button>
            </form>

        </div>
    );
};

export default Item;