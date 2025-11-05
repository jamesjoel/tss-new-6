import express from 'express';
import TeacherRoutes from './TeacherRoutes.js'
import StudentRoutes from './StudentRoutes.js'
import EmployeeRoutes from './EmployeeRoutes.js'

let routes = express.Router();

routes.use("/api/v1/teacher", TeacherRoutes);
routes.use("/api/v1/student", StudentRoutes);
routes.use("/api/v1/employee", EmployeeRoutes);

export default routes;

// localhost:3000/api/v1/student/fail