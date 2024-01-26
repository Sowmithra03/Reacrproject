import React,{useState,useCallback} from "react";
import './Callback.css'
const Callbacks =() =>{
    const [count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log(`button clicked. Count:${count}`);
    },[count]
    );
    return(
        <div className="Content">
            <button2 onClick={handleClick}>Click me</button2>
            <p>Count:{count}</p>
            <button2 onClick ={()=>setCount(count+1)}>Increment</button2>
        </div>
    );
};
export default Callbacks;