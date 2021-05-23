import React, {useState,useEffect} from 'react'

function Counter() {
    useEffect(()=>{
        console.log("Mounting...");
        return()=>{
          console.log("Unmounting...");
        }
      })
    const [count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1> Hello am a component : {count}</h1>
        </div>
    )
}

export default Counter
