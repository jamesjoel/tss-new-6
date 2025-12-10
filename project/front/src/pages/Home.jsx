import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import WhyShopWithUs from '../components/WhyShopWithUs'

import axios from 'axios'
const Home = () => {

   let [product, setProduct] = useState([]);

   useEffect(()=>{
      axios
         .get("https://fakestoreapi.com/products")
         .then(response => {
            // console.log(response.data);
            setProduct(response.data);
         })
   },[])

   

      
  

   return (
      <>
         <Slider />
         <WhyShopWithUs />
         <section className="product_section layout_padding">
            <div className="container">
               <div className="heading_container heading_center">
                  <h2>
                     Our <span>products</span>
                  </h2>
                  
               </div>
               <div className="row">


                  {
                     product.map(item => {
                        return(
                           <div className="col-sm-6 col-md-4 col-lg-4" >
                           <div className="box" style={{minHeight : "380px"}}>
                              <div className="option_container">
                                 <div className="options">
                                    <a href="" className="option1">
                                       {item.category}
                                    </a>
                                    <a href="" className="option2">
                                       ${item.price}
                                    </a>
                                 </div>
                              </div>
                              <div className="img-box">
                                 
                                 <img src={item.image} alt="" />
                              </div>
                              <div className="detail-box">
                                 <p>
                                    {item.title}
                                 </p>
                                 
                              </div>
                           </div>
                        </div>
                        )
                     })
                  }





               </div>

            </div>
         </section>
      </>
   )
}

export default Home