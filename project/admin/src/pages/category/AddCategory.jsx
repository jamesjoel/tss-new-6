import React from 'react'
import { API_URL } from '../../config/API'
import axios from 'axios'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'
import CateSchema from '../../schema/CategorySchema'


const AddCategory = () => {
  let navigate = useNavigate();
  let CateFrm = useFormik({
    validationSchema : CateSchema,
    initialValues : {
      name : ""
    },
    onSubmit : (formData)=>{
      axios
      // .post(API_URL+"/category", formData)
      .post(`${API_URL}/category`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
      .then(response=>{
        // console.log(response.data)
        navigate("/category/list")  
      })
    }
  })


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
              <form onSubmit={CateFrm.handleSubmit}>                            
            <div className="page-header flex-wrap">
              <div className="col-md-6 col-lg-6 col-sm-6 stretch-card grid-margin">
                <div className="card">
                    <div className="card-header">
                        <h4>Add New Category</h4>
                    </div>
                    <div className="card-body">
                      <div className="my-2">
                        <label htmlFor="">Category Name</label>
                        <input name='name' onChange={CateFrm.handleChange} type='text' className={'form-control ' + (CateFrm.errors.name && CateFrm.touched.name ? 'is-invalid' : '') } />
                        {
                          CateFrm.errors.name && CateFrm.touched.name
                          ?
                          <small className='text-danger'>{CateFrm.errors.name}</small>
                          :
                          ''
                        }
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

export default AddCategory