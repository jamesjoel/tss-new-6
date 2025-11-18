import express from 'express';
import { SaveProduct, GetAllProduct, UpdateProductById, GetProductById, Demo, GetAllProductByCategory, DeleteProductByCate, DeleteProductById } from '../controllers/ProductController.js';
const routes = express.Router();

routes.get("/", GetAllProduct);
routes.get("/:id", GetProductById)
routes.post("/", SaveProduct);
routes.delete("/:id", DeleteProductById)
routes.put("/:id", UpdateProductById)
// routes.get("/:catename", GetAllProductByCategory)
// routes.delete("/byid/:id", DeleteProductById);
// routes.delete("/bycate/:cate", DeleteProductByCate);

export default routes;