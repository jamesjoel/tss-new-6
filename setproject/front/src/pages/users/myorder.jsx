import React, { useEffect, useRef, useState } from 'react'
import { Api_url } from '../../config/api';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';
const myprofile = () => {


  let[showcamera,setshowcamera]= useState("none")
  let file=useRef();
  useEffect(()=>{
  // axios.get(`${Api_url}/profile`)

  axios.get(`${Api_url}/profile`,{Headers :{Authorization : localStorage.getItem("access_user")}})
  .then(Response=>{
    console.log(Response.data)

  })
  },[])
  let showcamericon=()=>{
   setshowcamera("block")
  }
 let hidecameraicon=()=>{
   setshowcamera("none")
  }
   let askimageupload=()=>{
    // console.log("*******")
    file.current.click();
   }
    let doupload =()=>{
      //  console.log(file.current.files[0]);
      let filedata=file.current.files[0];
      // console.log(filedata);
      let myformdata = new FormData();
      myformdata.append("image",filedata)
  
    axios.put(`${Api_url}/user/profilepic`,myformdata,{headers : {Authorization : localStorage.getItem("access_user")}})
    .then(response=>{
      console.log(response.data);
    })

  }
 
  return (
  <>
      <div className='col-md-9'>
      <div className='alert alert-dark'>
        <h4>order Information</h4>
        <a href=''>Edit</a>
        <br/>
          <br/>
        <div className='row'>
          <div className='col-md-6'>

        <input type='text' className='form-control' disabled value="" />
        <br/>
        your Gender
        <br/>
        male&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' disabled />&nbsp;&nbsp;&nbsp;&nbsp;
       female &nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' disabled />
       <br/>
       <br/>
       Email
       <br/>
       
       <input type='text' className='form-control' disabled value="" />
       <br/>
        Mobile Number
       
        <br/>
       <input type='text' className='form-control' disabled value="" />
       <br/>
       <br/>
       <h4> FAQS </h4>
       {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Ab molestias provident (vitae, dolorum aperiam quidem cupiditate ipsa.)
        <br/> Tempora exercitationem totam alias, cum quia optio a nesciunt delectus magni, ducimus pariatur. */}
        <b>Coupons for you</b>
        <br/>

Special PriceGet extra 20% off upto ₹40 on 20 item(s) (price inclusive of cashback/coupon)T&C
Available offers

Bank OfferFlat ₹50 off on Flipkart Bajaj Finserv Insta EMI Card. Min Booking Amount: ₹2,500T&C

Bank Offer10% off up to ₹1,500 on BOBCARD EMI Transactions, Min Txn Value: ₹5,000T&C

Bank Offer5% cashback on Axis Bank Flipkart Debit Card up to ₹750T&C

+9 more offers

          </div>
        </div>
      </div>
       </div>

   
  
  </>
  )
}

export default myprofile

