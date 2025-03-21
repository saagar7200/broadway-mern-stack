import React, { useMemo } from 'react'

const SquareCount = ({count,show}) => {
    const squaredCount = useMemo(()=>{
        console.log('calculating....')
        return count ** 2

    },[count])

  return (
    <div>
        <p>Squared Count is {squaredCount}</p>
    </div>
  )
}

export default SquareCount