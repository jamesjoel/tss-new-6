import express from 'express';
import { GetAllEmployee, SaveEmployee } from '../controllers/EmployeeController.js';

let routes = express.Router();

routes.get("/", GetAllEmployee);
routes.post("/", SaveEmployee);



export default routes;