import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import { API_URL } from '../config/API'
import * as YUP from 'yup'
let SignupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().email("Incorrect Email Id").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Password"),
    repassword : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password Should be same").required("Insert Re-Password"),
    contact : YUP.number().typeError("Only Number are accepted").min(1000000000, "Number Not Less Then 10").max(9999999999, "Number not more then 10").required("Insert Contact Number"),
    address : YUP.string().required("Insert Full Address"),
    gender : YUP.string().required("Select Your Gender"),
    city : YUP.string().required("Select Your City"),
})


const Signup = () => {
    let navigate = useNavigate();
    let [allCity, setAllCity] = useState([]);

    useEffect(()=>{
        axios
        .get(`${API_URL}/city`)
        .then(response=>{
            // console.log(response.data);
            setAllCity(response.data);
        })
    },[])


    let SignupFrm = useFormik({
        validationSchema : SignupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            contact : "",
            city : "",
            address : "",
            gender : "",
            repassword : ""

        },
        onSubmit : (formData)=>{
            console.log("***********", formData)
            return;
            // we have to post this "formData" by axios
            axios
            .post(`${API_URL}/user`, formData)
            .then(response=>{
                // console.log(response.data)
                navigate("/");
            })
        }
    })



  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 mt-3 offset-md-3">
                <form onSubmit={SignupFrm.handleSubmit}>
                <div className="card my-5 border border-dark">
                    <div className="card-header bg-dark-blue">
                        <h4 className='text-light'>User Registration</h4>
                        <small className='text-light'>If you already a member, <NavLink className="text-orange" to="/login">click here</NavLink></small>
                    </div>
                    <div className="card-body">
                        <div className='mt-4'>
                            <label>Full Name</label>
                            <input name='name' onChange={SignupFrm.handleChange} type='text' className={'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? 'is-invalid' : '')} placeholder='Full Name' />
                            {
                                SignupFrm.errors.name && SignupFrm.touched.name
                                ?
                                <small className='text-danger'>{SignupFrm.errors.name}</small>
                                :
                                ''
                            }
                        </div> 
                        <div className='mt-4'>
                            <label>Username/Email</label>
                            <input name='email' onChange={SignupFrm.handleChange} type='text' className={'form-control '+(SignupFrm.errors.email && SignupFrm.touched.email ? 'is-invalid' : '')} placeholder='Username/Email' />
                            {
                                SignupFrm.errors.email && SignupFrm.touched.email
                                ?
                                <small className='text-danger'>{SignupFrm.errors.email}</small>
                                :
                                ''
                            }
                        </div>    
                        <div className='mt-4'>
                            <label>Password</label>
                            <input name='password' onChange={SignupFrm.handleChange} type='password' className={'form-control '+(SignupFrm.errors.password && SignupFrm.touched.password ? 'is-invalid' : '')} placeholder='Password' />
                            {
                                SignupFrm.errors.password && SignupFrm.touched.password
                                ?
                                <small className='text-danger'>{SignupFrm.errors.password}</small>
                                :
                                ''
                            }
                        </div>    
                        <div className='mt-4'>
                            <label>Re-Password</label>
                            <input name='repassword' onChange={SignupFrm.handleChange} type='password' className={'form-control '+(SignupFrm.errors.repassword && SignupFrm.touched.repassword ? 'is-invalid' : '')} placeholder='Re-Password' />
                            {
                                SignupFrm.errors.repassword && SignupFrm.touched.repassword
                                ?
                                <small className='text-danger'>{SignupFrm.errors.repassword}</small>
                                :
                                ''
                            }
                        </div> 
                        <div className='mt-4'>
                            <label>Contact</label>
                            <input name='contact' onChange={SignupFrm.handleChange} type='text' className={'form-control '+(SignupFrm.errors.contact && SignupFrm.touched.contact ? 'is-invalid' : '')} placeholder='Contact' />
                            {
                                SignupFrm.errors.contact && SignupFrm.touched.contact
                                ?
                                <small className='text-danger'>{SignupFrm.errors.contact}</small>
                                :
                                ''
                            }
                        </div>    
                        <div className='mt-4'>
                            <label>Address</label>
                            <textarea name='address' onChange={SignupFrm.handleChange} className={'form-control '+(SignupFrm.errors.address && SignupFrm.touched.address ? 'is-invalid' : '')} placeholder='Address' ></textarea>
                            {
                                SignupFrm.errors.address && SignupFrm.touched.address
                                ?
                                <small className='text-danger'>{SignupFrm.errors.address}</small>
                                :
                                ''
                            }
                        </div>    
                        <div className='mt-4'>
                            <label>City</label>
                            <select name='city' onChange={SignupFrm.handleChange} className={'form-control '+(SignupFrm.errors.city && SignupFrm.touched.city ? 'is-invalid' : '')} >
                                <option>Select City</option>
                                {
                                    allCity.map(item=>{
                                        return(
                                            <option>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {
                                SignupFrm.errors.city && SignupFrm.touched.city
                                ?
                                <small className='text-danger'>{SignupFrm.errors.city}</small>
                                :
                                ''
                            }
                        </div> 
                        <div className='mt-4'>
                            <label>Gender</label><br />
                            Male <input value="male" type='radio' onChange={SignupFrm.handleChange}  name='gender'/> 
                            Female <input value="female" type='radio' onChange={SignupFrm.handleChange}  name='gender'/>
                            <br />
                            {
                                SignupFrm.errors.gender && SignupFrm.touched.gender
                                ?
                                <small className='text-danger'>{SignupFrm.errors.gender}</small>
                                :
                                ''
                            }
                        </div>   
                    </div>
                    <div className="card-footer bg-dark-blue">
                        <button type='submit' className='btn btn-light'>Registration</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup