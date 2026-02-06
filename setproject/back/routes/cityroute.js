import express from 'express';
import {getall,sendmail} from '../citycontroller/citycon.js';


let routes=express.Router()
routes.get("/",getall)
routes.get("/sendmail",sendmail)

export default routes;