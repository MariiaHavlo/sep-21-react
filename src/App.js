import React, {useReducer} from 'react';

import './App.css'


const reducer=(state,action)=>{
    switch (action.type){
        case'inc':
            return{...state,count1:state.count1+1}
        case'increment':
            return{...state,count2:state.count2+1}
        case'i':
            return {...state,count3:state.count3+1}
        case'dec':
            return{...state,count1:state.count1-1}
        case'decrement':
            return{...state,count2:state.count2-1}
        case'd':
            return {...state,count3:state.count3-1}
        case'res':
            return {...state,count1:action.payload}
        case 'reset':
            return {...state,count2:action.payload}
        case 'r':
            return {...state,count3:action.payload}
        default:
            throw new Error()
    }

}

const App = () => {


    const [state,dispatch]=useReducer(reducer,{count1:0, count2:0, count3:0 });

    return (
        <div>
            <div>
                <div>{state.count1}</div>
                <button onClick={()=>dispatch({type:'inc'})}>Inc</button>
                <button onClick={()=>dispatch({type:'dec'})}>Dec</button>
                <button onClick={()=>dispatch({type:'res',payload:3})}>Reset</button>
            </div>
            <div>
                <div>{state.count2}</div>
                <button onClick={()=>dispatch({type:'increment'})}>Inc</button>
                <button onClick={()=>dispatch({type:'decrement'})}>Dec</button>
                <button onClick={()=>dispatch({type:'reset',payload:3})}>Reset</button>
            </div>
            <div>
                <div>{state.count3}</div>
                <button onClick={()=>dispatch({type:'i'})}>Inc</button>
                <button onClick={()=>dispatch({type:'d'})}>Dec</button>
                <button onClick={()=>dispatch({type:'r',payload:3})}>Reset</button>
            </div>

        </div>
    );
};

export default App;