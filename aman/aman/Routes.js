import express from 'express';
import Teacher from './TeacherRoutes.js';
let Routes=express.Router();
Routes.use("/api/v1/teacher",Teacher);

export default Routes;