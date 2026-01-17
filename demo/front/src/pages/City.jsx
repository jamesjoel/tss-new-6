import React, { useEffect, useState } from 'react'
import axios from 'axios'
const City = () => {
    let [allCity, setAllCity] = useState([]);
    useEffect(()=>{
        axios
        .get("https://tss-6-live-1.onrender.com/api/v1/city")
        .then(response=>{
            setAllCity(response.data)
        })
    },[])

  return (
    <div className='container'>
        <h2>All City</h2>
        <table className="table table-info table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    allCity.map((item, index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.state}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default City