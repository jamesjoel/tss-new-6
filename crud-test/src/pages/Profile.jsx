import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  let [user, setUser] = useState({})
  useEffect(()=>{
    axios
    .get("https://api.escuelajs.co/api/v1/auth/profile", {
      headers : { Authorization : `Bearer ${localStorage.getItem("token")}`}
    })
    .then(response=>{
      setUser(response.data);
    })

  },[])


  return (
    <div className='w-100 mx-auto h-100 m-10 bg-gray-300'>
      <h1 className='text-center text-gray-600 text-3xl p-3'>Your Profile</h1>
      <div className='flex p-4 flex-wrap'>
        <p className='w-30 mx-5 my-3'>Full Name</p>
        <p className='w-30 mx-5 my-3'>{user.name}</p>
        <p className='w-30 mx-5 my-3'>Email</p>
        <p className='w-30 mx-5 my-3'>{user.email}</p>
        <p className='w-30 mx-5 my-3'>Role</p>
        <p className='w-30 mx-5 my-3'>{user.role}</p>
        <p className='w-30 mx-5 my-3'>Image</p>
        <img src={user.avatar} className='w-30'/>
      </div>
    </div>
  )
}

export default Profile