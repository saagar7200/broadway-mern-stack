import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const {id} = useParams()
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
    
    const fetchPost = async() =>{
        setLoading(true)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const result = await response.json()
            setData(result)
            
        } catch (error) {
            console.log(error)
            
        }finally{
            setLoading(false)
        }
    }

    fetchPost()
    

    },[id])



  return (
    <div>
        {
            loading ?
             <p>Loading....</p> 
            :
            <div>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
            </div>
        }
    </div>
  )
}

export default PostDetail