import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'


const App = () => {
 


  return (
    <>
    <Header />
    <div className='mx-auto w-250 h-dvh py-5'>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Products />} />
    </Routes>
    </div>
    </>
  )
}

export default App