import cityroutes from './cityroute.js';
import user from './userroute.js';
import category from './categoryroutes.js';
import express from 'express';
import Authroutes from './Authroutes.js';
import Adminauthroutes from './Adminauthroutes.js'
import Isuserloggedin from '../util/Isuserloggedin.js';
import subcategory from './subcategoryroutes.js';
import profileroutes from './profileroutes.js';
import Adminroutes from '../routes/AdminRoutes.js'
import productroutes from './productroutes.js';
import Isadminloggedin from '../util/Isadminloggedin.js';
let route=express.Router()



route.use("/api/v1/city",cityroutes);
route.use("/api/v1/user",user);
route.use("/api/v1/category",category);
route.use("/api/v1/admin",Isadminloggedin,Adminroutes)
route.use("/api/v1/subcategory",subcategory);
route.use("/api/v1/adminauth",Adminauthroutes)
route.use("/api/v1/product",productroutes)
route.use("/api/v1/profile",Isuserloggedin,profileroutes)
route.use("/api/v1/auth",Authroutes);


export default route;