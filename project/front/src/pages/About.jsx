import React, { useState, useRef } from 'react'
import axios from 'axios'
import {API_URL} from '../config/API'
const About = () => {

  let [msg, setMsg] = useState("")
  let send = ()=>{
    axios
    .get(`${API_URL}/city/sendmail`)
    .then(response=>{
      console.log(response.data)
      setMsg("Email Send Successfuly....")
    })
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <br />
          <br />
          <button onClick={send} className='btn btn-primary'>Send</button>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  )
}

export default About