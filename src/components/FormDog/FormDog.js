import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addDog} from "../../store/dog.slice";
import css from "./FormDog.module.css"

const FormDog = () => {
    const{handleSubmit,register,reset}=useForm();

    const dispatch = useDispatch();

    const submit = (data)=>{
        dispatch(addDog({data}))
        reset()
    }

    return (
        <div className={css.wrapper}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add dog: <input type="text" {...register('name')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default FormDog;