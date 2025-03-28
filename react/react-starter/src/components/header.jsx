import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <div style={{display:'flex' ,gap:'10px'}}>
            <Link  to={{pathname:"/"}} >Home</Link>
            <Link to={{pathname:"/about-us"}}>About</Link>
            <Link to={"/posts"}>Posts</Link>
        </div>
      
    </nav>
  )
}

export default Header
