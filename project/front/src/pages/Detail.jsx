import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../config/API';
const Detail = () => {
    let [pro, setPro] = useState({});
    let param = useParams();
    useEffect(()=>{
        axios
        .get(`${API_URL}/product/${param.a}`)
        .then(response=>{
            // console.log(response.data.result)
            setPro(response.data.result);
        })
    },[])

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-5">
                <div className="px-4">
                    <img src='/images/p2.png' className='img-thumbnail' style={{height : 400, width : "100%"}}/>
                <div className='d-flex justify-content-around mt-3'>
                    <NavLink to='' className='btn-orange '><i class="fa fa-bolt" aria-hidden="true"></i> Buy Now</NavLink>
                    <NavLink to='' className='btn-orange '> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</NavLink>
                </div>
                </div>
            </div>
            <div className="col-md-7">
                <h3>{pro.title}</h3>
                <small className='text-success'>Special Price</small>
                <h2>&#8377; {pro.price ? (pro.price - (pro.price*pro.discount/100)).toFixed(2) : ''}</h2>
                <h5><del className='text-muted'>{pro.price ? pro.price.toFixed(2) : ''}</del> <span className='text-success'>{pro.discount}%</span></h5>
                <br />
                <p>{pro.categoryId ? pro.categoryId.name : ''} &gt; {pro.subcategoryId ? pro.subcategoryId.name : ''}</p>
                <p>{pro.detail}</p>
                <h6>Size : {pro.size}</h6>
                <h6>Color : <span style={{display : "inline-block", height : 20, width : 20, backgroundColor : pro.color, borderRadius : 50, verticalAlign : "center"}}></span> </h6>

            </div>
        </div>
    </div>
  )
}

export default Detail