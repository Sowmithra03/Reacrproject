import React from 'react'
import { useState } from 'react';
import "./Count.css";
const Count=() =>{
    const [count,setCount]=useState(0);
    const increment=() =>{
        setCount(count+1);
    };
    const decrement=() =>{
        setCount(count-1);
    };
    const reset=() =>{
        setCount(0);
    };
  return (
    <div>
        <div className='container'>
            <div className='counterbox'>
                <h1>Counter:{count}</h1>
                <div className='buttonContainer'>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    </div>
  )
};
export default  Count;
