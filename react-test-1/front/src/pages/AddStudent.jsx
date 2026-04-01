import React, { useEffect } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SaveStu, UpdateStu } from '../redux/StudentSlice'

const AddStudent = () => {
    let dispatch = useDispatch();
    let param = useParams();
    let navigate = useNavigate();

    let allStu = useSelector(state=>state.StudentSlice);

    

    let [stu, setStu] = useState({
            name : "",
            fee : "",
            class : "",
            contact : ""
        })

    useEffect(()=>{
        if(param.id){
            let obj = {};
            allStu.forEach(item=>{
                if(item.id == param.id){
                    obj = item;
                }
            })
            setStu(obj);
        }
    },[allStu])    

    let stuFrm = useFormik({
        enableReinitialize : true,
        initialValues : stu,
        onSubmit : (formData)=>{
            if(param.id){
                dispatch(UpdateStu(formData));
                navigate("/student")            
            }
            else{
                
                dispatch(SaveStu(formData));
                navigate("/student")            
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