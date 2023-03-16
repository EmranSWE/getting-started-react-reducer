import React, { useContext, useReducer } from 'react';
import { COUNTER_CONTEXT } from '../App';

const Child = () => {
    // const {count,setCount} = useContext(COUNTER_CONTEXT);
const initialSate = 0;
const reducer = (state,action)=>{
    console.log(action)
    if(action.type == "INCREMENT"){
        return state + action.payload.count;
    }
    if(action.type == "DECREMENT"){
        return state - action.payload.count;
    }
}
    const [state,dispatch] = useReducer(reducer, initialSate)
    return (
        <div>
             <h1>Child count:  {state}</h1>
            <button onClick={()=> dispatch({type: "INCREMENT", payload :{count: 5}})}>Increase</button>
            <button onClick={()=> dispatch({type: "DECREMENT", payload :{count:5}})}>Decrease</button>
        </div>
    );
};

export default Child;