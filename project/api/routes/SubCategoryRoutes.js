import express from 'express';
import {SaveSubCategory, UpdateSubCategory, DeleteSubCategory, GetAllSubCategory, GetAllSubCategoryById} from '../controllers/SubCategoryController.js'
let routes = express.Router();

routes.get("/", GetAllSubCategory);
routes.get("/:id", GetAllSubCategoryById);
routes.post("/", SaveSubCategory);
routes.put("/:id", UpdateSubCategory);
routes.delete("/:id", DeleteSubCategory);

export default routes;