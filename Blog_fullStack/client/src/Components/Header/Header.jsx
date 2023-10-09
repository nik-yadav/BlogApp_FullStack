import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link className='logo' to={"/"}>My Blog</Link>
        <nav>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}> Register</Link>
        </nav>
    </header>
  )
}

export default Header