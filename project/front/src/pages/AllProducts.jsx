import React, {useEffect, useState} from 'react'
import "./AllProducts.css"

import ProductBox from '../components/ProductBox';
import axios from 'axios'
import Slider from '../components/Slider'
import WhyShopWithUs from '../components/WhyShopWithUs'
import { NavLink } from 'react-router-dom';
const AllProducts = () => {
    let [product, setProduct] = useState([]);
    let [showLoading, setShowLoading] = useState(false);
    let [allCate, setAllCate] = useState([])


   useEffect(()=>{
      axios
         .get(`${import.meta.env.VITE_API_URL}/product`)
         .then(response => {
            // console.log(response.data);
            setProduct(response.data.result);
         })
   },[])

   useEffect(() => {
      
      axios
         .get(import.meta.env.VITE_API_URL + "/category/subcate")
         .then(response => {
            // console.log(response.data.result)
            setAllCate(response.data.result);
         })
   }, [])



   let getProductByColor = (color)=>{
        axios
         .get(`${import.meta.env.VITE_API_URL}/filter`)
         .then(response => {
            // console.log(response.data);
            setProduct(response.data.result);
         })
    
   }




  return (
    <>
    {
        showLoading
        ?
    <div className='overlay'>
        <img src='/images/loading.gif' />
    </div>
    :
    ''
    }
    <section className="product_section layout_padding">
    <div className="container my-5" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-3">
                <div className="card bg-dark">
                    <div className="card-header">
                        <h4 className='text-light'>Filters</h4>
                    </div>
                    <div className="card-body">
                        <h5 className='text-light'>Categories</h5>
                        {/* <ul className='nav'>
                            <li className='nav-item'>
                                <button data-toggle="collapse" data-target="#id1" className='btn text-light'>Home Appliance</button>
                                <div className='collapse' id='id1'>
                                    <ul className='nav flex-column bg-dark'>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                    
                                
                            </li>
                            <li className='nav-item'>
                                <button data-toggle="collapse" data-target="#id2" className='nav-link btn text-light'>Mobile</button>
                                <div className='collapse' id='id2'>
                                    <ul className='nav flex-column bg-dark'>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            
                        </ul> */}
                        <div className='saperator'></div>
                        <br />
                        <h5 className='text-light'>Price</h5>
                        <br />
                        <div className='saperator'></div>
                        <br />
                        <h5 className='text-light'>Color</h5>
                        <span onClick={()=>getProductByColor('red')} className='color red'></span>
                        <span onClick={()=>getProductByColor('black')} className='color black'></span>
                        <span onClick={()=>getProductByColor('white')} className='color white'></span>
                        <span onClick={()=>getProductByColor('yellow')} className='color yellow'></span>
                        <span onClick={()=>getProductByColor('blue')} className='color blue'></span>
                        <span onClick={()=>getProductByColor('brown')} className='color brown'></span>
                        <span onClick={()=>getProductByColor('green')} className='color green'></span>
                        <br />
                        <div className='saperator'></div>
                        <br />
                        <h5 className='text-light'>Discount</h5>
                        <select className='form-control'>
                            <option>Select</option>
                            <option>10% and More</option>
                            <option>20% and More</option>
                            <option>30% and More</option>
                            <option>40% and More</option>
                            <option>50% and More</option>
                            
                        </select>
                        <br />
                        <div className='saperator'></div>
                        <br />
                        <h5 className='text-light'>Size</h5>
                        <select className='form-control'>
                            <option>All</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                            
                            
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <h3>All Products</h3>
                <div className="row">
                    {
                     product.map(item => {
                        return(
                           <ProductBox key={item._id} item={item} />
                        )
                     })
                  }
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default AllProducts


/*
{
                                allCate.map((item, index)=>{
                                    return(

                                        <li key={index} className="nav-item">
                                            <NavLink className='nav-link text-light'>{item.category ? item.category.name : ''} &nbsp;&nbsp; <i class="fa fa-caret-right" aria-hidden="true"></i></NavLink>
                                        </li>
                                    )
                                })
                            }

*/