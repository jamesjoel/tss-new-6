import express from 'express'
import EmployeeRoutes from './EmployeeRoutes.js'

let routes = express.Router();

routes.use("/api/v1/employee", EmployeeRoutes);

export default routes;
