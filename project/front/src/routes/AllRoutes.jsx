import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Logout from '../pages/users/Logout'
import MyProfile from '../pages/users/MyProfile'
import ProtactedRoutes from './ProtactedRoutes'
import MyOrders from '../pages/users/MyOrders'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

     

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
     


      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='' element={<ProtactedRoutes />}>
          <Route path='/myorders' element={<MyOrders />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/logout" element={<Logout />} />
      </Route>


    </Routes>
  )
}

export default AllRoutes
