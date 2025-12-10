import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import AddCategory from '../pages/category/AddCategory'
import ListCategory from '../pages/category/ListCategory'
import AddSubCategory from '../pages/subcategory/AddSubCategory'
import ListSubCategory from '../pages/subcategory/ListSubCategory'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/category' element={<AddCategory />} />
        <Route path='/category/list' element={<ListCategory />} />
        <Route path='/subcategory' element={<AddSubCategory />} />
        <Route path='/subcategory/list' element={<ListSubCategory />} />
    </Routes>
  )
}

export default AllRoutes