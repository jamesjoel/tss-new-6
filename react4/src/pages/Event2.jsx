import React, { useState } from 'react'

const Event2 = () => {

    let [a, setA] = useState(0)
    let [b, setB] = useState(0)

    // let demo = (a)=>{
    //     console.log("**********", a)
    // }


    let hello = (e)=>{
        setA(e.clientX)
        setB(e.clientY)
        
    }
  return (
    <div className="container my-2">
        <div className="row">
            <div className="col-md-12">
                <h1>{a} {b}</h1>
                
                {/* <button onClick={demo} className='btn btn-primary'>OK</button> */}
                {/* <button onClick={(e)=>demo(e)} className='btn btn-primary'>OK</button> */}
                <div onMouseMove={(e)=>hello(e)} style={{height : "500px", width : "100%", backgroundColor : "#CDC102"}}></div>
            </div>
        </div>
    </div>
  )
}

export default Event2