import React from 'react'
import { useReducer } from 'react'
import './Reducer.css'
const counterReducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT' :
            return{count:state.count+1};
        case 'DECREMENT':
            return{count:state.count-1};
        default:
            return state;
    }
}
export default function Reducer() {
    const[state,dispatch]=useReducer(counterReducer,{count:0});
  return (
    <div className="containerbox">
        <div className='containers'>
        <p>Count:{state.count}</p>
       <div className='button'>
        <button1 onClick ={() => dispatch({type:'INCREMENT'})}>ADD</button1>
        <button1 onClick={() => dispatch({type:'DECREMENT'})}>SUB</button1></div> 
        </div>
    </div>
  )
}
