import './home.css'
import React from 'react'
import { Welcome } from '../../components/welcome'
import Counter from '../../components/counter'
import Form from '../../components/form'
import { useState } from 'react'
const Home = () => {
  const isUser = true
const [show,setShow] = useState(true)
 



  return (
    <>
    <div className={'container'} >
      {isUser && <Welcome  name={"John"} isLoggedIn={true}/>}

      <div className='content'>
      <h1 data='home' >Home</h1>
      <p>
      This is Home.
      </p>
      </div>

      {
          show && <Counter show={show}/>
      }
      <input data='input' className='input' type='text' />
      <button onClick={()=> setShow(!show)}> toggle</button>
      {/* <Form/> */}
      <div className='child'>
        <p> div Bottom 1</p>
        <p>Bottom div 2</p>
        <p>Bottom div 3</p>
        <p>Bottom div 4</p>
        <p>Bottom div 5</p>
        <p>Bottom div 6</p>
      </div>
    </div>
    <h1>Head</h1>
    </>
  )
}

export default Home
