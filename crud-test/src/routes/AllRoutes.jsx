import React, { useEffect } from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Logout from '../pages/Logout'
import Product from '../pages/Product'
import AddProduct from '../pages/AddProduct'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='' element={<ProtactedRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/add' element={<AddProduct />} />
          <Route path='/logout' element={<Logout />} />
        </Route>

    </Routes>
  )
}

export default AllRoutes


let ProtactedRoute = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("token")){
    navigate("/")
    return;
  }
  },[])
  return(
    <Outlet />
  )
}