import React from 'react'

const Event3 = () => {

    let demo = (e)=>{
        e.preventDefault();
    }

    let hello = (e)=>{
        e.preventDefault();
        // console.log("$$$$$$$$$$$$$")
    }
  return (
    <div onContextMenu={(e)=>hello(e)} className="container my-4" style={{height : "600px"}}>
        <div className="row">
            <div className="col-md-12">
                <a onClick={(e)=>demo(e)} href='http://google.com'>Google</a>
            </div>
        </div>
    </div>
  )
}

export default Event3