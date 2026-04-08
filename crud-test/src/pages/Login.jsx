import React, { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import LoginSchema from '../schema/LoginSchema'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    let isLoggedIn = useContext(AuthContext);
    let [isLoading, setIsLoading] = useState(false)
    let [errMsg, setErrMsg] = useState("")
    let navigate = useNavigate();
    let LoginFrm = useFormik({
        initialValues : {
            email : "",
            password : ""
        },
        validationSchema : LoginSchema,
        onSubmit : async(formData)=>{
            setIsLoading(true)
            try{
                let response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", formData)
                localStorage.setItem("token", response.data.access_token);
                isLoggedIn[1](true)
                navigate("/profile")
            }catch(err){
                console.log("********", err)
                setErrMsg("This Email and Password is Incorrect")
                setIsLoading(false)
            }
        }
    })


  return (
    <div className='flex justify-center h-150 items-center'>

        <form onSubmit={LoginFrm.handleSubmit}>
    <div className='w-150 h-90 flex flex-col justify-center items-center bg-gray-200 rounded-2xl'>
        <h1 className='text-4xl text-gray-700 mb-5'>Login</h1>

        <input name='email' onChange={LoginFrm.handleChange} type='text' className={'my-3 border bg-gray-300  p-3 rounded-2xl w-100 ' + (LoginFrm.errors.email && LoginFrm.touched.email ? 'border-red-500' : 'border-gray-400')} placeholder='Email' />
        <input name='password' onChange={LoginFrm.handleChange} type='password' className={'my-3 border bg-gray-300 p-3 rounded-2xl w-100 ' + (LoginFrm.errors.password && LoginFrm.touched.password ? 'border-red-500' : 'border-gray-400')} placeholder='Password' />
        <button type='submit' className='bg-purple-900 text-white py-3 mt-3 px-6 rounded-2xl block text-xl w-100'>
            <div className='flex items-center justify-center'>
            {
                isLoading
                ?
                <span class="h-5 w-5 mx-3 inline-block animate-spin rounded-full border-4 border-solid border-white border-t-transparent"></span>
                :
                ''

            }
                Login
            </div>
        </button>
        <p className='text-red-800 text-md mt-3'>
            {
                errMsg
            }
        </p>
    </div>
        </form>
    </div>
  )
}

export default Login