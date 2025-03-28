import { useState,useEffect } from "react"


export const useFetch = (url) =>{
   

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{

        const fetchData = async () =>{
            try {

                const response = await fetch(url)
                const result = await response.json()
                setData(result)
                
            } catch (error) {

                console.log(error)
                
            }finally{
                setLoading(false)
            }

        }


        fetchData()

    },[url])


return {loading , data}

}