import React from 'react'
import Header from './components/Header'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Student from './pages/Student'
import AddStudent from './pages/AddStudent'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='' element={<Layout />}>
        <Route path='/student' element={<Student />} />
        <Route path='/student/add' element={<AddStudent />} />
        <Route path='/student/edit/:id' element={<AddStudent />} />
      </Route>
    </Routes>
    </>
  )
}

export default App


let Layout = ()=>{
  // location....

    return(
    <>
    <Outlet />
    </>
  )
}