import React from 'react'

const Login = () => {
  return (
    <div className='bg-[#F5E5E1] w-full h-dvh flex justify-end'>
      <div className='h-dvh w-150 bg-[#427A76] flex items-center justify-center'>
        <div className='flex flex-col justify-center'>

        <h1 className='text-4xl text-center text-white'>Friends Chat Box</h1>
        <input type='text' className='bg-white w-100 h-12 m-10 rounded-xl text-xl p-3' placeholder='Insert Your Name'/>
        <br />
        <div className='flex justify-center'>

        <button className='bg-black  text-2xl text-white py-2 px-20 rounded-xl'>Login</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login