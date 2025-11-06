import express from 'express'
import { GetAllProduct } from '../controllers/ProductController.js';
const routes = express.Router();

routes.get("/", GetAllProduct);

export default routes;

/*

jamessteppingstone_db_user
cLonaHpNNTvDys7o



mongodb+srv://jamessteppingstone_db_user:<db_password>@cluster0.nnogiy2.mongodb.net/?appName=Cluster0
*/