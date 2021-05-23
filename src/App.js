
import Counter from "./Counter"
import {useState} from "react"

function App() {
  const [state,setState]= useState(false)

  return (
    <div>
      <h1 onClick={()=>setState(!state)}>show/hide</h1>
      {/* initially state=false 
      onclick setstate(!false)=setstate(true) so now state become true
      on next click setstate(!true)= setstate(false) so current state becomes false */}
  { state ? <Counter/> : null}
         
    </div>
   
  );
}

export default App;
