import React, { useEffect, useRef, useState } from "react";
import { Api_url } from "../../config/api";
import { API_PATH } from "../../config/api";
// import proctedroutes from "../../routes/proctedroutes";
import axios from "axios";
import { NavLink } from "react-router-dom";
const myprofile = () => {
  let [user, setUser] = useState();
  let [pic, setpic] = useState("");
  // let [showcamera, setshowcamera] = useState("none");
  let file = useRef();
  useEffect(() => {
    // console.log("############");
    axios
      .get(`${Api_url}/profile/profilepic`, {
        headers: { Authorization: localStorage.getItem("access_user") },
      })
      .then((response) => {
        // console.log(response.data.result);
        setUser(response.data.result);

        let name =
          response.data.result.image == ""
            ? API_PATH + "/user_images/avater.jpg"
            : API_PATH + "user_images/" + response.data.result.image;

        setpic(name);
      });
  }, []);



  // let showcamericon = () => {
  //   setshowcamera("block");
  // };
  // let hidecameraicon = () => {
  //   setshowcamera("none");
  // };
  // let askimageupload = () => {
  //   // console.log("*******")
  //   file.current.click();
  // };
  let doupload = () => {
    console.log(localStorage.getItem("access_user"));
    let filedata = file.current.files[0];

    let myformdata = new FormData();
    myformdata.append("image", filedata);
    axios
      .put(`${Api_url}/user/profilepic`, myformdata, {
        headers: { Authorization: localStorage.getItem("access_user") },
      })
      .then((response) => {
        // console.log(response.data);
        setpic(API_PATH + "/user_images/" + response.data.name);
      });
  };

  return (
    <>
    
     {/* <div className="container my-4"> */}
        <input
          onChange={doupload}
          accept=".jpg, .jpeg, .png, image/jpeg, image/png "
          type="file"
          ref={file}
          style={{ display: "none" }}
        />
        {/* <div className="row"> */}
          {/* <div className="col-md-3 alert alert-dark">
            
            <div
              style={{ height: 70 }}
              onMouseOut={hidecameraicon}
              onMouseOver={showcamericon}
            >
              <img
                src={pic}
                className="img-thumbnail"
                style={{ height: "80px", width: "80px" }}
              ></img>
              <div
                onClick={askimageupload}
                style={{
                  height: 89,
                  width: 89,
                  position: "relative",
                  display: showcamera,
                  background: "rgba(0,0,0,0.2)",
                  bottom: 80,
                  textAlign: "center",
                }}
              >
                <i style={{ marginTop: 25 }} className="fa fa-camera fa-2x"></i>
              </div>
            </div>

            <p style={{ fontWeight: "bold" }}>{localStorage.getItem("name")}</p>

            <br />
            <div className="alert alert-info">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink to="/myprofile" className="nav-link">
                    my profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/myorder" className="nav-link">
                    my order
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/wishlist" className="nav-link">
                    wishlist
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link">
                    logout
                  </NavLink>
                </li>
              </ul>
              
            </div>
          </div> */}
          <div className="col-md-8 ">
            <div className="alert alert-dark"style={{backgroundColor : "#a5d4e7ff"}}>
              <h4>profile Information</h4>
              <NavLink to="/myprofile/edit">Edit</NavLink><br/>
               <NavLink  to="/myprofile/changepassword">change update</NavLink>
              <br />
              <br />
              <div className="row" >
                <div className="col-md-6">
                  <input
                    type="text" className="form-control"  value={user ? user.name : ''}
                  />
                  <br />
                  your Gender
                  <br />
                  Male &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="radio" disabled className={user == "male" ? "radio-button-outline" : ""  } checked={user == "male" ? true : false}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp; Female &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio" disabled className={user == "female" ? "radio-button-outline" : "" }   checked={user == "female" ? true : false}
                  />
                  <br />
                 <br />
                  <br />
                  Email
                  <br />
                  <input
                    type="text"
                    className="form-control"  disabled   value={user ? user.email : ''}
                  />
                  <br />
                  Mobile Number
                  <br />
                  <input
                    type="text"
                    className="form-control"  disabled  value={user ? user.contact : ''}
                  />
                  <br />
                  <br />
                  <h5>FAQs</h5>
                  <p>
                    <b>
                      What happens when I update my email address (or mobile
                      number)?
                    </b>
                  </p>
                  <p>
                    Your login email id (or mobile number) changes, likewise.
                    You'll receive all your account related communication on
                    your updated email address (or mobile number).
                  </p>
                  <p>
                    <b>
                      What happens when I update my email address (or mobile
                      number)?
                    </b>
                  </p>
                  <p>
                    Your login email id (or mobile number) changes, likewise.
                    You'll receive all your account related communication on
                    your updated email address (or mobile number).
                  </p>
                  <p>
                    <b>
                      What happens when I update my email address (or mobile
                      number)?
                    </b>
                  </p>
                  <p>
                    Your login email id (or mobile number) changes, likewise.
                    You'll receive all your account related communication on
                    your updated email address (or mobile number).
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      {/* </div>  */}
    </>
  );
};

export default myprofile;

