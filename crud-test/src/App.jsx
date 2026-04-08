import React, { useEffect, useState } from 'react'
import AllRoutes from './routes/AllRoutes'
import Header from './components/Header'
import Footer from './components/Footer'
import AuthContext from './context/AuthContext'

const App = () => {

  let isLoggedIn = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("token")){
      isLoggedIn[1](true);
    }
  },[])


  return (
    <>
    <AuthContext.Provider value={isLoggedIn}>
      <Header />
    <div className='w-full min-h-200'>
      <div className='w-300 mx-auto'>

        <AllRoutes />
      </div>
    </div>
    <Footer />
    </AuthContext.Provider>
    </>
  )
}

export default App