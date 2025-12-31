import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import WhyShopWithUs from '../components/WhyShopWithUs'

import axios from 'axios'
import ProductBox from '../components/ProductBox'
import {API_URL} from '../config/API'
const Home = () => {

   let [product, setProduct] = useState([]);

   useEffect(()=>{
      axios
         .get(`${API_URL}/product`)
         .then(response => {
            // console.log(response.data);
            setProduct(response.data.result);
         })
   },[])

   

      
  

   return (
      <>
         <Slider title1={"Sale 20% Off"} title2={"New Offer Comming"} text1={"hello"} text2={"world"} />
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
                           <ProductBox item={item} />
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