import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {API_URL} from '../../config/API'
import {useNavigate} from 'react-router-dom'

const AddProducts = () => {
  let navigate = useNavigate();
  let [allCate, setAllCate] = useState([])
  let [allSubCate, setAllSubCate] = useState([]);

  useEffect(()=>{
    axios
    .get(`${API_URL}/category`)
    .then(response=>{
      console.log(response.data.result)
      setAllCate(response.data.result);
    })
  },[])

  let ProFrm = useFormik({
    initialValues : {
        title : "",
        price : "",
        categoryId : "",
        subcategoryId : "",
        brand : "",
        quantity : "",
        costprice : "",
        discount : "",
        color : "",
        size : "",
        detail : ""
    },
    onSubmit : (formData)=>{
      // console.log(formData);
      axios
      .post(`${API_URL}/product`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
      .then(response=>{
          navigate("/product/list")
      })
    }
  })

  let getSubCateById = (e)=>{
    // console.log(e.target.value)
    let cid = e.target.value; //
    axios
    .get(`${API_URL}/subcategory/getsubcatebycateid/${cid}`)
    .then(response=>{
      // console.log(response.data)
      setAllSubCate(response.data.result);
    })
  }


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <form onSubmit={ProFrm.handleSubmit}>
            <div className="page-header flex-wrap">
              <div className="col-md-12 col-lg-12 col-sm-12 stretch-card grid-margin">
                <div className="card">
                    <div className="card-header">
                        <h4>Add New Product</h4>
                    </div>
                    <div className="card-body">
                      <div className="my-4">
                        <label htmlFor="">Product Title</label>
                        <input name='title' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Product Cost Price</label>
                        <input name='costprice' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Product Selling Price (M.R.P.)</label>
                        <input name='price' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Category</label>
                        <select className='form-control' name='categoryId' onChange={(e)=>{ProFrm.handleChange(e); getSubCateById(e)}}>
                          <option>Select</option>
                          {
                            allCate.map(item=><option value={item._id}>{item.name}</option>)
                          }
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Sub-Category</label>
                        <select className='form-control' name='subcategoryId' onChange={ProFrm.handleChange}>
                          <option>Select</option>
                          {
                            allSubCate.map(item=><option value={item._id}>{item.name}</option>)
                          }
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Brand/Company</label>
                        <input name='brand' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Size</label>
                        <select name='size' onChange={ProFrm.handleChange} className='form-control'>
                          <option>Select</option>
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                          <option>XXL</option>
                          <option>Free Size</option>
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Color</label>
                        <select name='color' onChange={ProFrm.handleChange} className='form-control'>
                          <option>Select</option>
                          <option>White</option>
                          <option>Black</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>Green</option>
                          <option>Yellow</option>
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Quantity</label>
                        <input name='quantity' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Discount(%)</label>
                        <input name='discount' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Detail</label>
                        <textarea name='detail' onChange={ProFrm.handleChange} className={'form-control'} ></textarea>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button type='submit' className='btn btn-success'>Add</button>
                    </div>
                </div>
              </div>
            </div>
            </form>  
        </div>
    </div>
  )
}

export default AddProducts

/*
   title : String,
    price : Number,
    categoryId : { type :  mongoose.Schema.Types.ObjectId, ref : "category"},
    subcategoryId : {type : mongoose.Schema.Types.ObjectId, ref : "subcategory"},
    brand : String,
    quantity : Number,
    costprice : Number,
    discount : Number,
    color : String,
    size : String,
    detail : String
*/

