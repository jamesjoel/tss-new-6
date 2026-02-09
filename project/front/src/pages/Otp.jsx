import React from 'react'

const Otp = () => {
  return (
     <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-3">
                <div className="card border boder-dark my-5">
                    <div className="card-header bg-dark-blue">
                        <h4 className='text-light'>OTP</h4>
                    </div>
                    <div className="card-body">
                        <label className='my-4'>OTP</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className="card-footer bg-dark-blue">
                        <button type='submit' className='btn btn-light'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Otp