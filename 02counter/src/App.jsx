import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0);
  
  const addvalue=()=>{
    //console.log("added value", Math.random());
    setCount(count+1);
  }

  const removevalue=()=>{
    // if(count>0){
    //   setCount(count-1);
    // }else{
    //   setCount(0);
    // }
    
    setCount(count-1);
    if(count<0){
      setCount(0);
    }
  }
  return (
    
    <>
     <h1>chai aur react</h1>
     <h2>Counter value:{count}</h2>

     <button onClick={addvalue}>add value</button>
     <br/>
     <button onClick={removevalue}>remove value</button>

    </>
  )
}

export default App
