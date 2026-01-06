import React from 'react'
import {NavLink} from 'react-router-dom'
import { API_PATH } from '../config/API'
const ProductBox = ({item}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4" >
                           <div className="box" style={{minHeight : "380px"}}>
                              <div className="option_container">
                                 <div className="options">
                                    <a href="" className="option1">
                                       {item.categoryId ? item.categoryId.name : ''}
                                    </a>
                                    <NavLink to={"/detail/"+item._id} className="option2">
                                       Detail
                                    </NavLink>
                                 </div>
                              </div>
                              <div className="img-box">
                                 
                                 <img src={item.image ? `${API_PATH}/product_images/${item.image}` : `/images/pro_avatar.jpg`} style={{height : "100px"}} alt="" />
                              </div>
                              <div className="detail-box">
                                 <p>
                                    {item.title}
                                 </p>
                                 
                              </div>
                           </div>
                        </div>
  )
}

export default ProductBox