import React, { useState } from 'react'
import H1 from '../components/H1'

const Demo = () => {
    let [bgColor, setBgColor] = useState("red")
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <H1>
                    <p>lorem</p>
                </H1>
                <h3>Props in React</h3>
                <div style={{height : 500, padding : 20, width : 500, backgroundColor : bgColor}}>
                    <DemoChild setBgColor={setBgColor} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Demo


let DemoChild = ({setBgColor})=>{
    let [a, setA] = useState("")
    return(
        <div style={{height : 200, width : 200, backgroundColor : "green"}}>
            <button onClick={()=>setBgColor(a)}>OK</button>
            <br />
            <input value={a} onChange={(e)=>setA(e.target.value)} type='text' />
        </div>
    )
}