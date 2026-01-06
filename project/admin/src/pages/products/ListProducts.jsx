import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config/API'
import { useRef } from 'react'
const ListProducts = () => {

  let file = useRef();

  let [allPro, setAllPro] = useState([]);
  let [showOverLay, setShowOverLay] = useState("none");
  let [imageSrc, setImageSrc] = useState("");

  let [proId, setProId] = useState(null);



  useEffect(()=>{
    axios
    .get(`${API_URL}/product`)
    .then(response=>{
      setAllPro(response.data.result);
    })
  },[])
 
  let selectUploadImage = (id)=>{
    setProId(id);
    file.current.click();
  }

  let selectImage = ()=>{
    setShowOverLay("block");
    let url =URL.createObjectURL(file.current.files[0])
    setImageSrc(url);
  }

  let hide = ()=>{
    setShowOverLay("none")
  }

  let upload = ()=>{
    // console.log(file.current.files[0])
    let myfile = file.current.files[0];
    let x = new FormData(); // we ceate a Form varible by FormData() class
    x.append("photo", myfile);
    axios.put(`${API_URL}/product/uploadimage/${proId}`, x)
    .then(response=>{
      // console.log(response.data);
      setShowOverLay("none")
    })
    

  }

  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <div className="page-header flex-wrap">
              <h3>List of All Product</h3>
              <input onChange={selectImage} accept=".jpg, .jpeg, .png, image/jpeg, image/png" ref={file} style={{display : "none"}} type='file' />
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>CostPrice / Price</th>
                        <th>Category</th>
                        <th>Sub-Category</th>
                        <th>Image</th>
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
                              <td>
                                <i onClick={()=>selectUploadImage(item._id)} className='fa fa-upload text-success'></i>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                  </div>
            </div>
          </div>

          <div style={{position : "absolute", width : "100%", height : "100%", backgroundColor : "rgba(0, 0, 0, 0.8)", display : showOverLay}}></div>              
          <div style={{position : "absolute", zIndex : 999, backgroundColor : "#666161", left : "40%", top : "20%", display : showOverLay, border : "1px solid #FFF", padding : 10}}>
            <div className='d-flex justify-content-between'>
            <h3 className='text-light'>Preview</h3>
            <button className='close text-light' onClick={hide}>x</button>
            </div>
            <img src={imageSrc} style={{height : 300, width : 300}} />
            <br />
            <button onClick={upload} className='btn btn-info mt-2'>Upload</button>
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