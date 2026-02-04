import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import AddCategory from '../pages/category/AddCategory'
import ListCategory from '../pages/category/ListCategory'
import AddSubCategory from '../pages/subcategory/AddSubCategory'
import ListSubCategory from '../pages/subcategory/ListSubCategory'
import Login from '../pages/Login'
import ProtactedRoutes from './ProtactedRoutes'
import Logout from '../pages/Logout'
import AddProducts from '../pages/products/AddProducts'
import ListProducts from '../pages/products/ListProducts'
import ListUsers from '../pages/users/ListUsers'
import ListAdmins from '../pages/admins/ListAdmins'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />


        <Route path='' element={<ProtactedRoutes />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/users/list' element={<ListUsers />} />
              <Route path='/product' element={<AddProducts />} />
              <Route path='/product/list' element={<ListProducts />} />
              <Route path='/product/edit/:id' element={<AddProducts />} />
              <Route path='/category' element={<AddCategory />} />
              <Route path='/category/list' element={<ListCategory />} />
              <Route path='/category/edit/:id' element={<AddCategory />} />
              <Route path='/subcategory' element={<AddSubCategory />} />
              <Route path='/subcategory/list' element={<ListSubCategory />} />
              <Route path='/subcategory/edit/:id' element={<AddSubCategory />} />
              <Route path='/admins/list' element={<ListAdmins />} />
        </Route>


    </Routes>
  )
}

export default AllRoutes