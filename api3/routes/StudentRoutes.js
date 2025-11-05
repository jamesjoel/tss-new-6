import express from 'express'
import {Student, FailStudent, PassStudent, MeritStudent} from '../controllers/StudentController.js'

let routes = express.Router();

routes.get("/", Student)
routes.get("/pass", PassStudent)
routes.get("/fail", FailStudent)
routes.get("/merit", MeritStudent)

export default routes;

// localhost:3000/api/v1/student/fail