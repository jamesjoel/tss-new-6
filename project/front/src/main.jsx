import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import AuthContext from './context/AuthContext'

const Layout = ()=>{

  let isUserLoggedIn = useState(localStorage.getItem("access_user") ? true : false);

  return(
    <AuthContext.Provider value={isUserLoggedIn}>

      <BrowserRouter>
      <App />
      </BrowserRouter>

    </AuthContext.Provider>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
