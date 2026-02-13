import React from 'react'
import axios from 'axios'
const App = () => { 

  

  let test = ()=>{
   axios.get("http://localhost:5000/chat")
   .then(response=>{
    console.log(response)
   })
};

  return (
    <div>
      <button onClick={test}>ok</button>
    </div>
  )
}

export default App