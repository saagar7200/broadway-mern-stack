'use client'

import React, { useEffect, useState } from 'react'





const Page = () => {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        async function getUsers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json()
            setUsers(data)
        }

        getUsers()

    }, [])

    console.log(users)
    return (
        <div> Our Services by id</div>
    )
}

export default Page