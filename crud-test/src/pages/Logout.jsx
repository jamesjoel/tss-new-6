import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Logout = () => {
  let isLoggedIn = useContext(AuthContext);
  isLoggedIn[1](false);
  localStorage.removeItem("token")
  return (
    <Navigate to="/" />
  )
}

export default Logout