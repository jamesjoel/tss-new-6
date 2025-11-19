import express from 'express';
import {getall,getbyid,tdelete,tupdate,save} 
from '../controller/teachercontroller.js';
 let routes=express.Router()

 routes.post("/",save)
 routes.get("/",getall)
 routes.get("/:id",getbyid)
 routes.put("/:id",tupdate)
 routes.delete("/:id",tdelete)
 export default routes;