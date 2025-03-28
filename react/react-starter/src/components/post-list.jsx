import React from 'react'
import {Link} from 'react-router-dom'
import { useFetch } from '../hooks/use-fetch'

const PostsList = () => {

    const {data:posts,loading} = useFetch('https://jsonplaceholder.typicode.com/posts')
    


  return (
    <div>
        {loading ? (
            <p>Loading..</p>
        ):(
            posts.map((post)=>{
                return(
                    <div key={post.id}>
                        <Link to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                )

            })
        )}
    </div>
  )
}

export default PostsList