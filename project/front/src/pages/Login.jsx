import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 mt-3 offset-md-3">
                <div className="card mt-5 border border-dark">
                    <div className="card-header bg-dark-blue">
                        <h4 className='text-light'>User Login</h4>
                        <small className='text-light'>If you a new user, <NavLink to="/signup" className="text-orange">click here</NavLink></small>
                    </div>
                    <div className="card-body">
                        <div className='my-4'>
                            <label>Username/Email</label>
                            <input type='text' className='form-control' placeholder='Username/Email' />
                        </div>    
                        <div className='my-4'>
                            <label>Password</label>
                            <input type='password' className='form-control' placeholder='Password' />
                        </div>    
                    </div>
                    <div className="card-footer bg-dark-blue">
                        <button type='submit' className='btn btn-light'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login