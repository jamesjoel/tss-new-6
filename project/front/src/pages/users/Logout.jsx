import React, {useContext} from 'react'
import AuthContext from '../../context/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom';

const Logout = () => {
    let logged = useContext(AuthContext);
    localStorage.removeItem("name");
    localStorage.removeItem("access_user");
    logged[1](false);
  return (
    <Navigate to="/login" />
  )
}

export default Logout


/*
    let navi = useNavigate();           Js
    navi("/login")


    <Navigate to="/login" />            JSX


*/