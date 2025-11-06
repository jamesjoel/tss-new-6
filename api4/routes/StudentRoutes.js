import express from 'express'
import { GetAllStudent } from "../controllers/StudentController.js";

let routes = express.Router();

routes.get("/", GetAllStudent);

export default routes;