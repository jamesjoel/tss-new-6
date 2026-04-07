import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink, useSearchParams } from 'react-router-dom'
import './Products.css'

const Products = () => {
    let [searchParam] = useSearchParams()
  const recPerPage = 4;
  let [totalPagesArr, setTotalPagesArr] = useState([])
  let [allPro, setAllPro] = useState([])
  let [currPage, setCurrPage] = useState(1)
  
  useEffect(()=>{
    axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then(response=>{
      // console.log(response.data.length) // 54
      let x = Math.ceil(response.data.length/recPerPage); // 5.4 -- 6
      let arr = Array.from({length : x})
      setTotalPagesArr(arr);
    })
  },[])

  useEffect(()=>{
    let of = 0;
    if(searchParam.get("offset")){
     of = searchParam.get("offset"); // 24
     setCurrPage((of/recPerPage)+1)   
    }
    axios
    .get(`https://api.escuelajs.co/api/v1/products?offset=${of}&limit=${recPerPage}`)
    .then(response=>{
        setAllPro(response.data);
    })
  },[searchParam])
  return (
    <>
        <div className='w-full flex justify-center'>
            <ul className='flex'>
            <li>
                {
                    currPage!=1
                    ?
                    <NavLink to={`?offset=${(currPage-2)*recPerPage}&limit=${recPerPage}`} className='py-1 px-2 rounded-md m-1 border hover:bg-gray-800 hover:text-white'>Prev</NavLink>
                    :
                    ''
                }
            </li>
            {
                totalPagesArr.map((_, index)=><li key={index}>
                <NavLink to={`?offset=${index*recPerPage}&limit=${recPerPage}`} className={'py-1 px-2 rounded-md m-1 border hover:bg-gray-800 hover:text-white '+ (currPage==index+1 ? 'current' : '') }>{index+1}</NavLink>
            </li>)
            }
            <li>
                {
                    totalPagesArr.length!=currPage
                    ?
                    <NavLink to={`?offset=${currPage*recPerPage}&limit=${recPerPage}`} className='py-1 px-2 rounded-md m-1 border hover:bg-gray-800 hover:text-white'>Next</NavLink>
                    :
                    ''

                }
            </li>
            
        </ul>
        </div>
        <div className='w-full py-3 px-2'>
            <h2 className='text-center text-2xl'>All Products</h2>
            <div className='w-full flex flex-wrap justify-between  min-h-150'>
                {
                    allPro.map((item, index)=><div key={index} className='w-55 h-70 m-2 border rounded-2xl'>
                    <h1 className='text-center h-18'>{item.title}</h1>
                    <div className='flex justify-center'>
                        <img src={item.images[0]} className='w-47 h-40' />
                    </div>
                    <div className='flex justify-between p-3'>
                        <h1>{item.price}</h1>
                        <h1>{item.category ? item.category.name : ''}</h1>
                    </div>
                </div> )
                }  
            </div>
        </div>
    </>
  )
}

export default Products