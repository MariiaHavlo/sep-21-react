import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCat} from "../../store/cat.slice";
import css from "./Cat.module.css"

const Cat = ({cat:{id,name}}) => {

    const dispatch= useDispatch()
    return (
        <div className={css.wrapper}>
            Name:{name}
            <div>
                <button onClick={()=>{dispatch(deleteCat({id}))}}>Delete</button>
            </div>
        </div>
    );
};

export default Cat;