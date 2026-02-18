import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'

const ListOrder = () => {

    let [allOrder, setAllOrder] = useState([])
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/order/getallorder`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            console.log(response.data)
            setAllOrder(response.data.result);
        })
    },[])


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <h2>Orders : All <span className='badge bg-dark text-light rounded-pill'>107</span></h2>
            <button className='btn btn-info m-2'>Placed <span className='badge rounded-pill bg-light text-dark'>7</span></button>
            <button className='btn btn-warning m-2'>Shipped <span className='badge rounded-pill bg-light text-dark'>8</span></button>
            <button className='btn btn-primary m-2'>Out For Develivery <span className='badge rounded-pill bg-light text-dark'>12</span></button>
            <button className='btn btn-danger m-2'>Delivered <span className='badge rounded-pill bg-light text-dark'>80</span></button>
            <div className="page-header flex-wrap">
               <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>D. Charge</th>
                        <th>Print</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.user_id ? item.user_id.name : ''}</td>
                                        <td>{item.product_id ? item.product_id.title : ''}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.status == 1 ? "Placed" : item.status==2 ? "Shipeed" : item.status==3 ? "Out Of Delivery" : 'Delivered'}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.charge}</td>
                                        <td><button className='btn btn-sm btn-primary'>Print</button> </td>
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

export default ListOrder