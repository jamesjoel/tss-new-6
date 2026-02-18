import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Student = () => {

    let navigate = useNavigate();

    let [allStu, setAllStu] = useState([])
    useEffect(()=>{
        axios
        .get("http://localhost:3000/student")
        .then(response=>{
            setAllStu(response.data)
        })
    },[])

    let stuDelete = (stu)=>{
        axios
        .delete("http://localhost:3000/student/"+stu.id)
        .then(response=>{
            setAllStu(prev=>prev.filter(item=>item.id!=stu.id));
        })
    }

    let stuEdit = (stu)=>{
        navigate("/student/edit/"+stu.id)
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 my-5">
                <br />
                <NavLink to="/student/add" className="btn btn-info mb-3">Add New Student</NavLink>
                <br />
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Fee</th>
                            <th>Contact</th>
                            <th>Class</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allStu.map((item, index)=><tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.fee}</td>
                                <td>{item.contact}</td>
                                <td>{item.class}</td>
                                <td>
                                    <button onClick={()=>stuEdit(item)} className='btn btn-warning'>Edit</button>
                                </td>
                                <td>
                                    <button onClick={()=>stuDelete(item)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Student