import React from 'react'
import Header from '../components/header'
import { MapComponent } from '../components/map-component'
import { Welcome } from '../components/welcome'
import Counter from '../components/counter'
import Form from '../components/form'
import { useState } from 'react'
const Home = () => {
  const isUser = true
const [show,setShow] = useState(true)
 



  return (
    <div>
      {isUser && <Welcome  name={"John"} isLoggedIn={true}/>}

      <p>

      This is Home.
      </p>
      {
          show && <Counter show={show}/>
      }
      <button onClick={()=> setShow(!show)}> toggle</button>
      <Form/>
    </div>
  )
}

export default Home
