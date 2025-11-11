import express from 'express';
import { SaveProduct } from '../controllers/ProductController.js';
const routes = express.Router();

routes.post("/", SaveProduct);

export default routes;