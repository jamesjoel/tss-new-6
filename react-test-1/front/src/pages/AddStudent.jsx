import React, { useEffect } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

const AddStudent = () => {
    let param = useParams();
    let navigate = useNavigate();


    

    let [stu, setStu] = useState({
            name : "",
            fee : "",
            class : "",
            contact : ""
        })

    useEffect(()=>{
        if(param.id){
            axios
            .get("http://localhost:3000/student/"+param.id)
            .then(response=>{
                setStu(response.data)
            })
        }
    },[])    

    let stuFrm = useFormik({
        enableReinitialize : true,
        initialValues : stu,
        onSubmit : (formData)=>{
            if(param.id){
                  axios
            .put("http://localhost:3000/student/"+param.id, formData)
            .then(response=>{
                navigate("/student");
            })
            }else{
                axios
            .post("http://localhost:3000/student", formData)
            .then(response=>{
                navigate("/student");
            })
            }
        }
    })

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={stuFrm.handleSubmit}>
                <h4>{param.id ? 'Edit' : 'Add New'} Student</h4>
                <div className="my-3">
                    <label>Name</label>
                    <input value={stuFrm.values.name} name='name' onChange={stuFrm.handleChange} type='text' className='form-control' />
                </div>
                <div className="my-3">
                    <label>Fee</label>
                    <input value={stuFrm.values.fee} name='fee' onChange={stuFrm.handleChange} type='text' className='form-control' />
                </div>
                <div className="my-3">
                    <label>Class</label>
                    <input value={stuFrm.values.class} name='class' onChange={stuFrm.handleChange} type='text' className='form-control' />
                </div>
                <div className="my-3">
                    <label>Contact</label>
                    <input value={stuFrm.values.contact} name='contact' onChange={stuFrm.handleChange}  type='text' className='form-control' />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>{param.id ? 'Update' : "add"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddStudent