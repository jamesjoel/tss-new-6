import React, { useState, useRef } from 'react'
import axios from 'axios'
/*
HTTP Request Object -- Methods
  .get
  .post
  .put
  .delete


axios.get("url").then(response=>{
  
  
})


*/



const About = () => {

  let [src, setSrc] = useState('/images/p1.png')
  let selectFile = useRef();
  let demo = ()=>{
    selectFile.current.click();
  }

  let hello = ()=>{
    // console.log(selectFile.current.files[0])
    let x = URL.createObjectURL(selectFile.current.files[0]);
    // console.log(x)
    setSrc(x)
  }
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <img style={{height : 300, width : 300}} src={src} />
          <button onClick={demo}>ok</button>
          <input onChange={hello} ref={selectFile} type='file' style={{display : "none"}}/>
        </div>
      </div>
    </div>
  )
}

export default About