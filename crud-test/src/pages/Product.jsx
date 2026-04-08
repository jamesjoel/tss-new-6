import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
  let [pro, setPro] = useState([])

  useEffect(()=>{
    axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then(response=>{
      setPro(response.data)
    })
  },[])


  let confDelete = (obj)=>{
    axios
    .delete("https://api.escuelajs.co/api/v1/products/"+obj.id)
    .then(response=>{
      setPro(prev=>prev.filter(item=>item.id != obj.id));
    })
  }

  return (
    <div className='w-300 my-3'>
      <NavLink to="/product/add" className='py-2 px-4 bg-purple-800 text-white text-xl m-4'>Add New Product</NavLink>
        <table className="border border-gray-500 w-full text-xl mt-10">
            <thead>
              <tr className='bg-gray-300'>
                <th className='border border-gray-500 p-2'>#</th>
                <th className='border border-gray-500 p-2'>Title</th>
                <th className='border border-gray-500 p-2'>Price</th>
                <th className='border border-gray-500 p-2'>Image</th>
                <th className='border border-gray-500 p-2'>Edit</th>
                <th className='border border-gray-500 p-2'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                pro.map((item, index)=><tr key={index} className={index%2 == 0 ? 'bg-blue-200' : 'bg-blue-300'}>
                    <td className='border border-gray-500 p-2'>{index+1}</td>
                    <td className='border border-gray-500 p-2'>{item.title}</td>
                    <td className='border border-gray-500 p-2'>{item.price}</td>
                    <td className='border border-gray-500 p-2'>
                      <img src={item.images} className='w-20 h-20' />
                    </td>
                    <td className='border border-gray-500 p-2 text-center'>
                      <button className='py-2 px-3 bg-green-500 text-white rounded-md'>Edit</button>
                    </td>
                    <td className='border border-gray-500 p-2 text-center'>
                      <button onClick={()=>confDelete(item)}  className='cursor-pointer py-2 px-3 bg-red-500 text-white rounded-md'>Delete</button>
                    </td>
                </tr>)
              }
            </tbody>
        </table>
    </div>
  )
}

export default Product