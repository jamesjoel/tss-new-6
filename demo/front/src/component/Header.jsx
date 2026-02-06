import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className="container">
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/city" className="nav-link">City</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header