import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import AuthContext from './context/AuthContext'
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import CartReducer from './redux/CartSlice'

let rootReducer = combineReducers({CartReducer})

let store = configureStore({
  reducer : rootReducer
})




const Layout = ()=>{

  let isUserLoggedIn = useState(localStorage.getItem("access_user") ? true : false);

  return(
    <Provider store={store}>

    <AuthContext.Provider value={isUserLoggedIn}>

      <BrowserRouter>
      <App />
      </BrowserRouter>

    </AuthContext.Provider>
    </Provider>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
