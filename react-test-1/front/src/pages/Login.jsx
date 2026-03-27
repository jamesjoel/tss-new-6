import { useFormik } from 'formik'
import React, { useState, useContext } from 'react'
import axios from 'axios'
import LogoContext from './LogoContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    let x = useContext(LogoContext)

    let [errMsg, setErrMsg] = useState("");
    let [loader, setLoader] = useState(false)
    let navigate = useNavigate();
    let frm = useFormik({
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : (formData)=>{
            // console.log(formData)
            setLoader(true)
            axios
            .post("https://api.escuelajs.co/api/v1/auth/login", formData)
            .then(response=>{
                let a = response.data.access_token;
                localStorage.setItem("token", a);
                navigate("/profile");
                // console.log("*********")
                // console.log(response.data);
            })
            .catch(err=>{
                // console.log("###########")
                setLoader(false)
                setErrMsg("This Email and Password is Incorrect");
            })
        }
    })

  return (
    <div className="container">
        <div className="row">
            <form onSubmit={frm.handleSubmit}>
            <div className="col-md-6 offset-md-3">
                <h3>Login</h3>
                <div className="my-3">
                    <label className='my-2'>Email</label>
                    <input name='email' onChange={frm.handleChange} type='text' className='form-control' />
                </div>
                <div className="my-3">
                    <label className='my-2'>Password</label>
                    <input name='password' onChange={frm.handleChange} type='password' className='form-control' />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Login {loader ? <span className='spinner-border spinner-border-sm'></span> : ''} </button>
                <p className='text-center text-danger'>{errMsg}</p>
            </div>
            </form>
            <button onClick={()=>x[1]("The Stepping Stone")}>ok</button>
        </div>
    </div>
  )
}

export default Login