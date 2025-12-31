import express from 'express';
import {SaveProduct, UpdateProduct, DeleteProduct, GetAllProduct, GetAllProductById} from '../controllers/ProductController.js'
let routes = express.Router();

routes.get("/", GetAllProduct);
routes.get("/:id", GetAllProductById);
routes.post("/", SaveProduct);
routes.put("/:id", UpdateProduct);
routes.delete("/:id", DeleteProduct);

export default routes;