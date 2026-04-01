import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Student from './pages/Student'
import AddStudent from './pages/AddStudent'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import Product from './pages/Product'
import EMI from './pages/EMI'
import TikTakTok from './pages/TikTakTok'
import SnakeLadder from './pages/SnakeLadder'
import Demo from './pages/Demo'
import Demo2 from './pages/Demo2'
import LogoContext from './pages/LogoContext'

import { useDispatch } from 'react-redux'
import { GetAllStu } from './redux/StudentSlice'

const App = () => {
  let dispatch = useDispatch();

  dispatch(GetAllStu());

  let logo = useState("My Project")
  // ["My Project", fn]
  return (
    <>
    <LogoContext.Provider value={logo}>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/demo' element={<Demo />} />
      <Route path='/demo2' element={<Demo2 />} />
      <Route path='/emi' element={<EMI />} />
      <Route path='/snake' element={<SnakeLadder />} />
      <Route path='/tik' element={<TikTakTok />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product' element={<Product />} />

      <Route path='' element={<ProtactedRoute />}>
        <Route path='/logout' element={<Logout />} />
        <Route path='/profile' element={<Profile />} />
      </Route>



      <Route path='' element={<Layout />}>
        <Route path='/student' element={<Student />} />
        <Route path='/student/add' element={<AddStudent />} />
        <Route path='/student/edit/:id' element={<AddStudent />} />
      </Route>
    </Routes>
    </LogoContext.Provider>
    </>
  )
}

export default App

let ProtactedRoute = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("token")){
      navigate("/login")
    }
  },[])
  return(
    <Outlet />
  )
}


let Layout = ()=>{
  // location....

    return(
    <>
    <Outlet />
    </>
  )
}