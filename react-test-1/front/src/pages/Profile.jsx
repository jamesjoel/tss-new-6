import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    let [user, setUser] = useState({});
    useEffect(()=>{
        let a = localStorage.getItem("token");
        axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", 
            {
                headers : {Authorization : `Bearer ${a}`}
            }
        
        )
        .then(response=>{
            console.log(response.data)
            setUser(response.data);
        })
    },[])

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3>Welcome</h3>
                {
                    user.name
                    ?
                    <div>
                    <div>Name : {user.name}</div>
                    <div>Email : {user.email}</div>
                    <div>Role : {user.role}</div>
                    <div>Image : <img src={user.avatar} height="100" width="100" /></div>
                </div>
                :
                <h4>Loading .....</h4>
                }
                
            </div>
        </div>
    </div>
  )
}

export default Profile