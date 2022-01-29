import React from 'react';
import { useSelector} from "react-redux";

import Cat from "../Cat/Cat";


const Cats = () => {

  const {cats} =  useSelector(state => state['catReducer']);


    return (
        <div>
            {cats.map(cat =><Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export default Cats;