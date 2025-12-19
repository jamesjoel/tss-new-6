import React, { useEffect } from 'react'
import { Outlet, useNavigate, NavLink } from 'react-router-dom'

const ProtactedRoutes = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("access_user")){
            navigate("/login");
        }
    },[])

  return (
    <>
     <div className="container my-4">
      <div className="row">
        <div className="col-md-3">
            <div className="alert" style={{backgroundColor : "#a5d4e7ff"}}>
                <div className='d-flex'>
                  <img src='/images/avatar.jpg' className='img-thumbnail' style={{height : "70px", width : "70px", margin : "0 10px"}} />
                  <div>
                    <small>Hello</small>
                    <p style={{fontWeight : "bold"}}>{localStorage.getItem("name")}</p>
                  </div>
                </div>
            </div>
            <div className="alert" style={{backgroundColor : "#a5d4e7ff"}}>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <NavLink to='/myprofile' className='nav-link'>My Profile</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/myorders' className='nav-link'>My Orders</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/myorders' className='nav-link'>Wishlist</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/myorders' className='nav-link'>Setting</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/logout' className='nav-link'>Logout</NavLink>
                </li>
                
              </ul>
            </div>
        </div>
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default ProtactedRoutes