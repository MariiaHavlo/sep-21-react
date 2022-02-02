import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createTodo} from "../../store/todo.slice";

const Form = () => {
  const{handleSubmit,register,reset} = useForm()

    const dispatch = useDispatch()

    const submit=(data)=>{
      dispatch(createTodo({data}))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name')}/>
                <button >Save</button>

            </form>
        </div>
    );
};

export default Form;