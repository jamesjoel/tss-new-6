import React from 'react'

const App = () => {
  return (
  <>
    <div className='w-full h-20 bg-[#174143]'></div>
    <div className='flex'>
        <div className='w-80 h-dvh bg-red-400'>
          <h1 className='text-2xl text-center bg-black text-white py-3'>Online Friends</h1>
          <ul className=''>
            <li className='p-5 flex items-center hover:bg-[#c94c4e]'><img className='h-10 me-2 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&s' /> <span className='text-xl text-white'>Abhishek</span></li>
            <li className='p-5 flex items-center hover:bg-[#c94c4e]'><img className='h-10 me-2 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&s' /> <span className='text-xl text-white'>Abhishek</span></li>
            <li className='p-5 flex items-center hover:bg-[#c94c4e]'><img className='h-10 me-2 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&s' /> <span className='text-xl text-white'>Abhishek</span></li>
            <li className='p-5 flex items-center hover:bg-[#c94c4e]'><img className='h-10 me-2 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&s' /> <span className='text-xl text-white'>Abhishek</span></li>
            <li className='p-5 flex items-center hover:bg-[#c94c4e]'><img className='h-10 me-2 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&s' /> <span className='text-xl text-white'>Abhishek</span></li>
            
          </ul>
        </div>
        <div className='w-320 h-dvh bg-[#F5E5E1]'>
          <div className='flex justify-start'>

          <div className='w-120 m-5 bg-black text-white p-3 rounded-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel quaerat quia vitae nesciunt error quam autem natus corporis, consequuntur ipsam iusto nemo delectus, quo ullam illo, et suscipit enim?</div>
          </div>
          <div className='flex justify-end'>
          <div className='w-120 m-5 bg-black text-white p-3 rounded-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel quaerat quia vitae nesciunt error quam autem natus corporis, consequuntur ipsam iusto nemo delectus, quo ullam illo, et suscipit enim?</div>
          </div>
          
        </div>
    </div>
  </>

  )
}

export default App