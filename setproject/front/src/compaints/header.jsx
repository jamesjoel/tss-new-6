import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { Api_url } from '../config/api';

const header = () => {
  let [allCate, setAllCate] = useState([]);
   useEffect(() => {
         axios
         .get(`${Api_url}/category/subcate`)
         .then(response => {
            console.log(response.data.result)
            setAllCate(response.data.result);
         })
      },[]) 
  return (

    <>
     <header className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <NavLink className="navbar-brand" to="index.html"><img width="250" src="/images/logo.png" alt="#" /></NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item active">
                           <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                      
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>

                                            {/* <nav class="menu" style={{color:"#fff",backgroundColor:"#FFF"}}>
  <ul>
    <li>
    <NavLink className="nav-link" to="/Product"><h5>dropdown</h5></NavLink>
      <ul class="dropdown">

        <li>
          <NavLink to="#">Phones ▸</NavLink>
          <ul class="dropdown">
             <li><NavLink to="#">iPhone</NavLink></li>
          

            

          </ul>
        </li>
        
      

      </ul>
    </li>
  </ul>
</nav> */}
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/Product">Product</NavLink>
                           </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/singup">Signup</NavLink>
                            </li>
                            {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/Login">Login</NavLink>
                            </li>  */}

                         {/* <li className='nav-item dropdown'>
                        <NavLink className="dropdown-toggle nav-link" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Categories
                        </NavLink>
                        <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">  
                         <li className='dropdown-item'><NavLink to='#'>item1</NavLink></li> 
                            <li className='dropdown-submenu'>
                           <NavLink className='dropdown-item' to='#'>item2</NavLink>
                           <ul className='dropdown-menu'>
                          
                          </ul>
                          </li> 
                          
                            {
                              allCate.map(item1=>{
                                 return(
                                    <li className="dropdown-submenu">
                              <NavLink className="dropdown-item" to="#">{item1.category ? item1.category.name : ''}</NavLink>
                              <ul className="dropdown-menu">
                                 {
                                    item1.info.map(item2=>{
                                       return(
                                          <li className="dropdown-item"><NavLink to="#">{item2.name}</NavLink></li>
                                       )
                                    })
                                 }                                 
                              </ul>
                           </li>
                                 )
                              })
                           } 
                        </ul> 
                     </li> */}

                      <li className='nav-item dropdown'>
                        <NavLink className="dropdown-toggle nav-link" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Categorie
                        </NavLink>
                        <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                           {
                              allCate.map(item1=>{
                                 return(
                                    <li className="dropdown-submenu">
                              <NavLink className="dropdown-item" to="#">{item1.category ? item1.category.name : ''}</NavLink>
                              <ul className="dropdown-menu">
                                 {
                                    item1.info.map(item2=>{
                                       return(
                                          <li className="dropdown-item"><NavLink to="#">{item2.name}</NavLink></li>
                                       )
                                    })
                                 }                                 
                              </ul>
                           </li>
                                 )
                              })
                           }
                        </ul>
                     </li>
                      {
                               localStorage.getItem("access_user")
                               ?
                            <li className="nav-item dropdown">
                           <NavLink className="nav-link dropdown-toggle" to="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">
                              {localStorage.getItem("name")}
                               <span className="caret"></span></span></NavLink>
                           <ul className="dropdown-menu">
                            <li><NavLink to='/myprofile'>my profile</NavLink></li>
                            <li><NavLink to='/myorder'>my order</NavLink></li>
                            <li><NavLink to='/wishlist'>wishlist</NavLink></li>
                            <li><NavLink to='/logout'>logout</NavLink></li>
                                                       
                            </ul>
                           </li>
                           :  <>
                           <li className="nav-item">
                            <NavLink className="nav-link" to="/singup">Signup</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/Login">Login</NavLink>
                             </li>

                             
                            </>
                            }
                            
                             
                    </ul>
                  </div>
               </nav>
            </div> 
         </header>
    </>
  )
}

export default header



