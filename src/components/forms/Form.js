import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const[form,setForm]=useState({name:'',username:'',email:''});

    const formHandler=(e)=>{
       const inputData={...form,[e.target.name]:e.target.value};
        setForm({...inputData})
    };
    const onSubmit=(e)=>{
        e.preventDefault();
        getFilter(form);
    }

    return (
        <div>
            <form>
                <label>Name <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>Username <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label>email <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                <button onClick={()=>onSubmit}>Filter</button>
            </form>

        </div>
    );
};

export default Form;