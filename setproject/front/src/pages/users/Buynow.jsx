import React from 'react'

const Buynow = () => {
  return (
   <>
   <div className='container my-4'>
    <div className='row'>
        <div className='col-md-8' >
            <div className='card p-4'style={{backgroundColor:"#a5d4e7ff"}}>
                 <h5 className=' p-2 bg-dark text-white' ><span className='badge bg-light text-dark'>1</span> login</h5>
                 <p className='py-1 mx-1'> <i className='fa fa-user'>aman patel</i></p>
                <p className='py-1 mx-1'> <i className='fa fa-phone'>87456955442</i></p>
                 <h5 className=' p-2 bg-dark text-white' ><span className='badge bg-light text-dark'>2</span> Address</h5>
                 <p className='py-1 mx-1'> <i className='fa fa-book'>ujjain </i></p>
              
            </div>
            </div>
            <div className='col-md-4'>
                <div className='card p-4'style={{backgroundColor:"#a5d4e7ff"}}>
               <h6>price detail</h6>
               <div className='card p-3' style={{backgroundColor:"#ccc"}}>
              <div className='d-flex justify-content-between'>
                <p>price</p>
                <p>100.00</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p>Discount(15%)</p>
                <p>-150.00</p>
               </div>
                <div className='d-flex justify-content-between'>
                <p>Delivery</p>
                <p>100.00</p>
               </div>
               <hr/>
               <div className='d-flex justify-content-between'>
                <p><b>payble Amount</b></p>
                <p><b>1200.00</b></p>
               </div>
              </div>
              <br/>
               <button className='btn btn-success'>order summery</button>
                </div>
           </div>
      </div>
   </div>
   </>
  )
}

export default Buynow
