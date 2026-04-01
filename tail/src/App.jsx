import React from 'react'

const App = () => {
  return (
    <div className='w-full h-dvh bg-gray-800'>
      <div className='w-full min-h-20 bg-gray-200'>
        <div className='w-[80%] mx-auto flex'>
          <div className='w-[20%]'>
            <h1 className='text-xl font-bold pt-5'>The Stepping Stone</h1>
          </div>
          <div className='w-[80%]'>
            <ul className='flex w-full justify-around pt-5'>
              <li>
                <a href='' className='bg-red-600 p-4 hover:bg-amber-500'>Home</a>
              </li>
              <li>
                <a href='' className='bg-red-600 p-4'>About</a>
              </li>
              <li>
                <a href='' className='bg-red-600 p-4'>Contact</a>
              </li>
              <li>
                <a href='' className='bg-red-600 p-4'>Contact</a>
              </li>
              <li>
                <a href='' className='bg-red-600 p-4'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App