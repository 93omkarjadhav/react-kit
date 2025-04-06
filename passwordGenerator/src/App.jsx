import { useState, useCallback, useEffect , useRef} from 'react';


function App() {
  const [length, setLength] = useState(0)
  const[numallowed, setNumallowed]=useState(false);
  const[charallowed,setcharAllowed]=useState(false);
  const[password, setpassword]=useState("");
  const copypasswordtoclipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
  }, [password])

  //useref hook
  const passwordRef= useRef(null);  
  const passwordGenerator=useCallback(
    () => {
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numallowed) str+="0123456789"
      if(charallowed) str+="!@#$%^&*(){}[]~`=+"

      for(let i=1; i<=length; i++){
        let char=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char);
      }
    setpassword(pass)
    },
    [length, numallowed,charallowed,setpassword],
  )

  useEffect(()=>{
    passwordGenerator()
  },[length, numallowed, charallowed, passwordGenerator])
  
  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    
      <div className='className=flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
        <button onClick={copypasswordtoclipboard}>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
          <label >Length:{length}</label>
        </div>
         
         <div className='flex items-center gap--x-1'>
          <input type="checkbox" defaultChecked={numallowed} id="numberInput" onChange={()=>{
            setNumallowed((prev)=> !prev);
          }} />
          <label htmlFor="numberInput">Numbers</label>
         </div>

<div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={charallowed} id='characterInput' onChange={()=>{setcharAllowed((prev)=>!prev);

    }} />
    <label htmlFor="characterInput">Characters</label>
</div>
      </div>
    </div>
    
    </>
  )
}

export default App
