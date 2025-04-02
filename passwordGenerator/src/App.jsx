import { useState, useCallback, useEffect } from 'react';


function App() {
  const [length, setLength] = useState(0)
  const[numallowed, setNumallowed]=useState(false);
  const[charallowed,setcharAllowed]=useState(false);
  const[password, setpassword]=useState("");
  const passwordGenerator=useCallback(
    () => {
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numallowed) str+="0123456789"
      if(charallowed) str+="!@#$%^&*(){}[]~`=+"

      for(let i=1; i<=Array.length; i++){
        let char=Math.floor(Math.random()*str.length+1)
        pass=str.charAt(char);
      }
    setpassword(pass)
    },
    [length, numallowed,charallowed,setpassword],
  )
  
  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    
      <div className='className=flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly />
        <button>copy</button>
      </div>
    </div>
    
    </>
  )
}

export default App
