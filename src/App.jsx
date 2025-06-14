import './App.css'
import React from 'react'
import Home from './components/homepage/Home'
import {Routes, Route, Link, NavLink} from 'react-router-dom'

function App() {
  return (
    <>
      
    <Routes>

      <Route path = '/' element={<Home />}></Route>

    </Routes>


    </>
  )
}

export default App
