import React from 'react'

export async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json()
    return posts

}

const Page = async () => {
    const data = await getPost()
    console.log(data)
    return (
        <div> Our Services</div>
    )
}

export default Page