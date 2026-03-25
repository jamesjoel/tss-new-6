import React from 'react'
import "./Snake.css"

const SnakeLadder = () => {
    let arr = Array.from({length : 100})
  return (
    <>
    <div style={{backgroundImage : "url('/images/l1.png')", height : 400, width : 150, position : "absolute", top : 200, left : 280, backgroundSize : "100% 100%"}} ></div>
    <div className="container my-2">
        <div className="row">
            <div className="col-md-12 d-flex flex-wrap bg-info justify-content-center py-5 flex-row-reverse">
                {
                    arr.map((item, index)=><div className='block'>{100-(index)}</div>)
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default SnakeLadder