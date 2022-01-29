import React from 'react';
import {useDispatch} from "react-redux";

import {deleteDog} from "../../store/dog.slice"
import css from "./Dog.module.css"


const Dog = ({dog:{id,name}}) => {
    const dispatch=useDispatch();

    return (
        <div className={css.wrapper}>
            Name: {name}
            <button onClick={()=>{dispatch(deleteDog({id}))}}>Delete</button>
        </div>
    );
};

export default Dog;