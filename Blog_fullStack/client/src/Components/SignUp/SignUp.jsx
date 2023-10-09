import React, { useState } from "react";

export default function SignUp() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  async function register(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:8000/register', {
    method: 'POST',
    body: JSON.stringify({username,password}),
    headers: {'Content-Type':'application/json'},
    });
    // if(response.ok === false){
    //   alert('Registration failed')
    // }else{
    //   alert('Registration passed')
    // }
  }

  return (
    <div>
      <form className="registerpage" onSubmit={register}>
        <h1> Register </h1>
        <label htmlFor="emailforlabel" className="email-label">
          Email address
        </label>
        <input
          type="text"
          id="emailforlabel"
          placeholder="username"
          value={username}
          onChange={ev => setusername(ev.target.value)}
          className="form-control"
          name="user"
        />
        <label htmlFor="pass1" className="password-label">
          Password
        </label>
        <input
          type="password"
          id="pass1"
          placeholder="password"
          onChange={ev => setPassword(ev.target.value)}
          className="password-input"
          name="password"
        />

        <button>Sign Up</button>
      </form>
    </div>
  );
};

