import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config/API'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const AddSubCategory = () => {
    let navigate = useNavigate();
    let [allCate, setAllCate] = useState([]);
    useEffect(()=>{
        axios
        .get(`${API_URL}/category`)
        .then(response=>{
            setAllCate(response.data.result);
        })
    },[])

    let SubCateFrm = useFormik({
        initialValues : {
            name : "",
            categoryId : ""
        },
        onSubmit : (formData)=>{
            axios
            .post(`${API_URL}/subcategory`, formData)
            .then(response=>{
                navigate("/subcategory/list")
                // console.log(response.data);
            })
        }
    })


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <form onSubmit={SubCateFrm.handleSubmit}>
            <div className="page-header flex-wrap">
              <div className="col-md-6 col-lg-6 col-sm-6 stretch-card grid-margin">
                <div className="card">
                    <div className="card-header">
                        <h4>Add New Sub-Category</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label>Name</label>                            
                            <input name='name' onChange={SubCateFrm.handleChange} type='text' className='form-control' />
                        </div>
                        <div className="my-3">
                            <label>Category</label>
                            <select name='categoryId' onChange={SubCateFrm.handleChange} className='form-control'>
                                <option>Select</option>
                                {
                                    allCate.map(item=>{
                                        return(
                                            <option value={item._id}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
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

export default AddSubCategory