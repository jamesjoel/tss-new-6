import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config/API'
import axios from 'axios'

const ListCategory = () => {
  let [allCate, setAllCate] = useState([]);

  useEffect(()=>{
    axios
    .get(API_URL+"/category")
    .then(response=>{
      setAllCate(response.data.result);
    })
  },[])

  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <div className="page-header flex-wrap">
                <h3>List of All Category</h3>
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allCate.map((item, index)=>{
                          return(
                            <tr>
                              <td>{index+1}</td>
                              <td>{item.name}</td>
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

export default ListCategory