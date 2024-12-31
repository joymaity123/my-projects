import "./App.css";
import { useState } from "react";
function App(){
  // let count=10;
  const [count,setCount]=useState(0);
  const addToCount=()=>{
  if(count<10){
    setCount(count+1)
  }
  }
const subtractFromCount=()=>{
  if(count>0){
    setCount(count-1)
  }
}
  return(
    <div>
      <h4>the current count is...</h4>
      <h1>{count}</h1>
      {/* <button>-</button>
      <button>+</button> */}
      <button onClick={subtractFromCount}>-</button>
      <button onClick={addToCount}>+</button>
    </div>
  );
}
export default App;