import  express from 'express';
import routes from './productroutes.js'

let ans=express.Router();
ans.use("/",routes);

export default ans;