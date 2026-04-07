import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div className='w-full h-12 bg-gray-800'>
        <div className='mx-auto w-250 h-12 '>
            <ul className='flex h-12 w-100 justify-center items-center'>
                <li>
                    <NavLink className='text-white px-7 py-3 hover:bg-gray-300 hover:text-black' to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink className='text-white px-7 py-3 hover:bg-gray-300 hover:text-black' to="/product" >Product</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header