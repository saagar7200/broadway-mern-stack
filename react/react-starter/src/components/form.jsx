import React, { useState } from 'react'

const Form = () => {
    const [formValues,setFormValues] = useState({
        email:'',
        password:''
    })


    const handleChange = (e) =>{
        const {name,value}  = e.target
        
        setFormValues((prev) =>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    console.log(formValues)


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('submitted')
        console.log(formValues)
        setFormValues({
            email:'',
            password:''
        })


    }
   
  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input
                name={'email'}
                value={formValues.email}
                type='email'
                placeholder='enter your email'
                onChange={(e) => handleChange(e)}

            />
            <input
                type='password'
                value={formValues.password}
                name={'password'}
                placeholder='password'
                onChange={(e)=> handleChange(e)}

            />

            <button>Submit</button>

        </form>
      
    </div>
  )
}

export default Form
