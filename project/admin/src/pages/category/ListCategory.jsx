import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config/API'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import {ToastContainer, toast} from 'react-toastify'

const ListCategory = () => {
  let [allCate, setAllCate] = useState([]);
  let [show, setShow] = useState(false);

  let [cate, setCate] = useState({});

  let [preloader, setPreLoader] = useState(false);


  useEffect(()=>{
    axios
    .get(API_URL+"/category")
    .then(response=>{
      setAllCate(response.data.result);
    })
  },[])

  let askDelete = (obj)=>{
    setCate(obj);
    setShow(true)
  }
  let hideDeleteBox = ()=>setShow(false)

  let confDelete = ()=>{
    setPreLoader(true)
    axios
    .delete(`${API_URL}/category/${cate._id}`)
    .then(response=>{
      setPreLoader(false)
      setShow(false);
      setAllCate(curr=>curr.filter(item=>item._id != cate._id))
      toast("Category Deleted Successfuly.....")
      
    })
  }
  return (
    <>
    <ToastContainer />
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Delete Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure want to Delete <b>{cate.name}</b> !</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={confDelete} className='btn btn-danger'>Confirm 
          {
            preloader==true
            ?
            <span className='spinner-border spinner-border-sm'></span> 
            :
            ''
          }
        </button>
        <button className='btn btn-info' onClick={hideDeleteBox}>Close</button>
      </Modal.Footer>
    </Modal>
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <h2>Category</h2>
            <div className="page-header flex-wrap">
                {
                  allCate.length > 0
                  ?
                  <>
                <h3>List of All Category</h3>
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allCate.map((item, index)=>{
                          return(
                            <tr>
                              <td>{index+1}</td>
                              <td>{item.name}</td>
                              <td>
                                <button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'>
                                  <i className='fa fa-trash'></i>
                                </button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
                </>
                :
                <div className='alert alert-warning'>No Data Found</div>
                }
            </div>
        </div>
    </div>
  </>
  )
}

export default ListCategory