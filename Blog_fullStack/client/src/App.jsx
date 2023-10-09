import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Components/Header/Header'
import Post from './Components/Post/Post'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<main>
          <Header />
          <Post />
          <Post />
          <Post />
        </main>} />
        <Route path={"/login"} element={<main>
          <Header />
          <Login />
        </main>}></Route>
        <Route path={"/signup"} element={<main>
          <Header />
          <SignUp />
        </main>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
