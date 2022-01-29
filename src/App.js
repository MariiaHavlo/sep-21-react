import React from 'react';

import './App.css'
import FormCat from "./components/FormCat/FormCat";
import FormDog from "./components/FormDog/FormDog";
import Dogs from "./components/Dogs/Dogs";
import Cats from "./components/Cats/Cats";
import css from "./App.module.css";


const App = () => {
    return (
        <div className={css.main}>
                <FormCat/>
                <FormDog/>

                <Cats/>
                <Dogs/>
        </div>
    );
};

export default App;