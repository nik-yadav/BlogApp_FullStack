import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div>
      <form className="loginpage"action=''>
        <h1> Login </h1>
        <label htmlFor='emailforlabel'className="email-label">Email address</label>
        <input type='email' id='emailforlabel' className='form-control' name='email'/>
        <label htmlFor='pass1'className="password-label">Password</label>
        <input type='password' id='pass1' className='password-input'name='password' />

        <button>LogIn</button>
      </form>
    </div>
  )
}

export default Login