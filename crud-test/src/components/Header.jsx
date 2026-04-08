import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { NavLink } from 'react-router-dom'

const Header = () => {
    let isLoggedIn = useContext(AuthContext)

  return (
    <div className='w-full h-17 bg-purple-800'>
        <div className='w-300 mx-auto h-17'>
            <ul className='flex w-300 justify-start h-17 items-center'>
                {
                    isLoggedIn[0]
                    ?
                    <>
                    <li>
                        <NavLink className='mx-5 py-4 px-10 hover:bg-black text-white hover:text-white text-xl' to='/profile'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className='mx-5 py-4 px-10 hover:bg-black text-white hover:text-white text-xl' to='/product'>Product</NavLink>
                    </li>
                    <li>
                        <NavLink className='mx-5 py-4 px-10 hover:bg-black text-white hover:text-white text-xl' to='/logout'>Logout</NavLink>
                    </li>    
                    </>
                    :
                    <li>
                        <NavLink className='mx-5 py-4 px-10 hover:bg-black text-white hover:text-white text-xl' to='/'>Login</NavLink>
                    </li>
                }
                
            </ul>
        </div>
    </div>
  )
}

export default Header