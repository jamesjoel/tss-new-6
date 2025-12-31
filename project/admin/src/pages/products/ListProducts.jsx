import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config/API'
const ListProducts = () => {

  let [allPro, setAllPro] = useState([]);

  useEffect(()=>{
    axios
    .get(`${API_URL}/product`)
    .then(response=>{
      setAllPro(response.data.result);
    })
  },[])
 

  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <div className="page-header flex-wrap">
              <h3>List of All Product</h3>
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>CostPrice / Price</th>
                        <th>Category</th>
                        <th>Sub-Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allPro.map((item, index)=>{
                          return(
                            <tr>
                              <td>{index+1}</td>
                              <td>{item.title}</td>
                              <td>{item.costprice}/{item.price}</td>
                              <td>{item.categoryId ? item.categoryId.name : ''}</td>
                              <td>{item.subcategoryId ? item.subcategoryId.name : ''}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                  </div>
            </div>
          </div>
    </div>
  )
}

export default ListProducts

/*

event = {demo}

event = {demo(100)}  --- XXXXXXXXXXXXX wrong code

event = {()=>demo(100)}  --- XXXXXXXXXXXXX correct code

whenever a event call, then DOM (browser) return a object --- its called
"DOM Event Object"


*/