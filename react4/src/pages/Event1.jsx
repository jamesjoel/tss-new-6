import React, { useState } from 'react'
import './Event1.css'

const Event1 = () => {

    let [x, setX] = useState("red")
    let [num, setNum] = useState(0)


    let clickHandler = ()=>{
        console.log("**********")
    }

    let doubleClickHandler = ()=>{
        console.log("###########");
    }
    let contextMenuHandler = ()=>{
        console.log("@@@@@@@@@@@@")
    }

    let demo1 = ()=>{
        // setX("green");
        setNum(prev=>prev+1)
    }
    let demo2 = ()=>{
        setX("blue")
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <br />
                <h1>{num}</h1>
                <br />
                <button 
                    onContextMenu={contextMenuHandler}
                    onClick={clickHandler} 
                    onDoubleClick={doubleClickHandler} 
                    className='btn btn-info'>
                        Login
                </button>
                <br />
                <div onMouseMove={demo1} onMouseOut={demo2} style={{height : "200px", width : "200px", backgroundColor : x}}></div>
            </div>
        </div>
    </div>
  )
}

export default Event1