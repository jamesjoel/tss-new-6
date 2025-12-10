import React, { useState } from 'react'
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

  let [user, setUser] = useState([]);
  
  let getData = ()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        // console.log(response.data);
        setUser(response.data);
    })
}


  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <button onClick={getData} className='btn btn-primary'>OK</button>
          {
            user.length > 0
            ?
            <table className="table mt-3 table-info table-hover table-striped table-bordered">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Zip-Code</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((item, index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.address.zipcode}</td>
                      <td>{item.company.name}</td>
                    </tr>
                  )
                })
              }
            </tbody>
            </table>
            :
            <div className="alert alert-warning my-4">
              when you click on the "ok" button, when data will come
            </div>
          }

          

        </div>
      </div>
    </div>
  )
}

export default About