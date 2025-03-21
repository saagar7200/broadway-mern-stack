import React, { useEffect, useState } from 'react'
import SquareCount from './squareCount'

const Counter = ({show}) => {
    const [count,setCount] = useState(0)
    // const ref = useRef(null)
    // const inputRef = useRef(null)

    // const counterRef = useRef(count)

     // useEffect

  // useEffect(()=>{
  //   console.log(ref)
  //   if(ref.current){
  //     const currentEl = ref.current
  //     // currentEl.style.backgroundColor = 'red'
  //     currentEl.style.padding = '10px'
  //   }

  //   if(inputRef.current){
  //     inputRef.current.focus()
  //   }
  //   console.log('from use effect') 

  //   return () =>{
  //     console.log('unmount')
  //   }
    
  //  },[])

   useEffect(()=>{
    throw new Error('errr');
   },[count])
  
  return (
    <div >
        <p >the count is:{count}</p>
        {/* <p>Previous count : {counterRef.current}</p> */}
        {/* <input ref={inputRef} type='text' /> */}
        <SquareCount show={show} count={10}/>
        

        <div >
            <button onClick={() => setCount(count + 1)} type='button'>Increase count</button>
            <button onClick={() =>setCount( Math.max(0,count - 1 ))} type='button'>Decrease count</button>
        </div>
      
    </div>
  )
}

export default Counter
