import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Projects from "../src/pages/Projects"
import Contact from "../src/pages/Contact"


const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
