import React from 'react';
import {useDispatch} from "react-redux";
import {changeTodo, deleteTodo} from "../../store/todo.slice";
import css from './item.module.css';


const Item = ({item:{id,name,status}}) => {

    const dispatch = useDispatch()

    const submit = (data) =>{
        dispatch(changeTodo(data))
    }

    return (
        <div>
            <form>
                <label className={status ? css.checkbox:null}><input  type="checkbox" value={status}
                                                                      onChange={()=>changeTodo(submit)}/>{name}</label>



                <button onClick={()=>dispatch(deleteTodo({id}))}>Delete</button>
            </form>

        </div>
    );
};

export default Item;