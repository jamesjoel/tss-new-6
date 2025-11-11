import express from 'express';
import { saveproduct } from '../controller/productcontroller.js'

let routes=express.Router();

routes.post("/api/v1/product",saveproduct);

export default routes;