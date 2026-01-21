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
import Detail from '../pages/Detail'
import ShowFooterRoutes from './ShowFooterRoutes'
import BuyNow from '../pages/users/BuyNow'
import ProtactedRoutesWithoutSideNav from './ProtactedRoutesWithoutSideNav'
import EditProfile from '../pages/users/EditProfile'
import ChangePassword from '../pages/users/ChangePassword'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<ShowFooterRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>

     

          <Route path="/detail/:a" element={<Detail />} />
          <Route path="/about" element={<About />} />


      <Route path="/signup" element={<Signup />} />
      <Route path='' element={<ProtactedRoutesWithoutSideNav />}>
          
          <Route path='/buy-now/:id' element={<BuyNow />} />
          <Route path='' element={<ProtactedRoutes />}>

            <Route path='/myorders' element={<MyOrders />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/myprofile/edit" element={<EditProfile />} />
            <Route path="/myprofile/change-password" element={<ChangePassword />} />

            <Route path="/logout" element={<Logout />} />
          </Route>
      </Route>


    </Routes>
  )
}

export default AllRoutes
