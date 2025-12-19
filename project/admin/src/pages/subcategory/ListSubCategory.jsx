import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config/API'
import axios from 'axios'
const ListSubCategory = () => {
    let [allSubCate, setAllSubCate] = useState([]);

    useEffect(()=>{
        axios
        .get(`${API_URL}/subcategory`)
        .then(response=>{
            setAllSubCate(response.data.result)
        })
    },[])
  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <div className="page-header flex-wrap">
                <h3>List of All Sub-Category</h3>
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sub-Category Name</th>
                            <th>Category Name</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            allSubCate.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.categoryId.name}</td>
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

export default ListSubCategory