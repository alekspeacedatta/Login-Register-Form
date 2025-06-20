import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './components/index'
import Login from './components/Login'
import Logined from './components/Logined'
import Register from './components/Register'
import Registered from './components/Registered'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/registered' element={<Registered/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logined' element={<Logined/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
