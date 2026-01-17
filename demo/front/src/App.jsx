import React from 'react'
import Header from './component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import About from './pages/About'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/city" element={<City />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<City />} />
    </Routes>

    </>
  )
}

export default App