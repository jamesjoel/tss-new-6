import express from 'express';
import {SaveProduct, DeleteAllProduct, UploadImage, UpdateProduct, DeleteProduct, GetAllProduct, GetAllProductById} from '../controllers/ProductController.js'
let routes = express.Router();

routes.get("/", GetAllProduct);
routes.get("/deleteall", DeleteAllProduct);
routes.get("/:id", GetAllProductById);
routes.post("/", SaveProduct);
routes.put("/uploadimage/:id", UploadImage)
routes.put("/:id", UpdateProduct);
routes.delete("/:id", DeleteProduct);


export default routes;