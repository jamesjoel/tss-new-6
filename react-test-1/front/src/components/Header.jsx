import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import LogoContext from '../pages/LogoContext'
import { useSelector } from 'react-redux'

const Header = () => {

    let x = useContext(LogoContext)

    let stuData = useSelector(state=>state.StudentSlice)


    let playerArr = useSelector(state=>state.PlayerSlice)

  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <div className='container'>
            <NavLink className='navbar-brand' to="/">{x[0]}</NavLink>
            <button className='navbar-toggler' data-bs-target="#menu" data-bs-toggle="collapse">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse d-flex justify-content-between' id='menu'>
                <ul className='nav navbar-nav'>
                    <li className='nav-item'>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/demo" className="nav-link">Demo</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/demo2" className="nav-link">Demo2</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/emi" className="nav-link">EMI</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/snake" className="nav-link">Snake & Ladder</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/tik" className="nav-link">Tik Tak Tok</NavLink>
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
                    
                    <li className='nav-item'>
                        <NavLink to="/student" className="nav-link">Student ({stuData.length})</NavLink>
                    </li>
                </ul>
                <ul className='nav navbar-nav'>
                    <li className='nav-item'>
                        <a href='' className='btn btn-light btn-sm m-2'>First Player - {playerArr[0]}</a>
                        
                    </li>
                    <li className='nav-item'>
                        <a href='' className='btn btn-light btn-sm m-2'>Second Player - {playerArr[1]}</a>
                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header