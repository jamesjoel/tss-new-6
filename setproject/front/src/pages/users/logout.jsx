import React from 'react';
import { Navigate } from 'react-router-dom';

const logout = () => {
  // let navigate= useNavigate();
   localStorage.removeItem("name");
   localStorage.removeItem("access_name");
  //  navigate("/login")
  return (
    <>
   <Navigate to="/login" />
 
    </>
  )
}

export default logout
