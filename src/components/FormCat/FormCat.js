import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCat} from "../../store/cat.slice";
import css from "./FormCat.module.css"

const FormCat = () => {
    const{handleSubmit,register,reset}= useForm();

    const dispatch = useDispatch();

    const submit = (data)=>{
        dispatch(addCat({data}))
        reset()
    }

    return (
        <div className={css.wrapper}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add cat:<input type="text" {...register('name')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default FormCat;