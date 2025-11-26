import React, { useState } from 'react'

const Data = () => {

    let [stu, setStu] = useState(["nilesh", "gaurav", "amit", "vijay", "raj", "nidhi", "jaya", "rohit"])
    

    let addHandler = ()=>{
        setStu(prev=>[...prev, "aman"]);
    }
    let removeHandler = ()=>{
        setStu(prev=>prev.filter(item=>item!="vijay"))
    }
    let updateHandler = ()=>{
        setStu(prev=>prev.map(item=>item=="gaurav" ? "james" :item));
        
    }


  return (
    <div className="container my-4">
        <button onClick={addHandler} className='btn btn-primary'>Add</button>
        <button onClick={removeHandler} className='btn btn-danger'>Remove</button>
        <button onClick={updateHandler} className='btn btn-info'>Update</button>
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <table className="table table-dark table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stu.map((item, index)=><tr>
                                                    <td>{index+1}</td>
                                                    <td>{item}</td>
                                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Data