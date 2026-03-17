import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <div className='container'>
            <NavLink className='navbar-brand' to="/">My Product</NavLink>
            <button className='navbar-toggler' data-bs-target="#menu" data-bs-toggle="collapse">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='menu'>
                <ul className='nav navbar-nav'>
                    <li className='nav-item'>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/product" className="nav-link">Product</NavLink>
                    </li>
                    {
                        localStorage.getItem("token")
                        ?
                        <>
                        <li className='nav-item'>
                        <NavLink to="/profile" className="nav-link">Profile</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/logout" className="nav-link">Logout</NavLink>
                    </li>
                    </>
                    :
                    <li className='nav-item'>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>

                    }
                    
                    {/* <li className='nav-item'>
                        <NavLink to="/student" className="nav-link">Student</NavLink>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header