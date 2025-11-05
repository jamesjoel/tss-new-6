import express from 'express'
import {AllTeacher, PrimaryTeacher, HeighTeacher, CollegeTeacher} from '../controllers/TeacherController.js'

let routes = express.Router();

routes.get("/", AllTeacher);
routes.get("/primary", PrimaryTeacher);
routes.get("/heigh", HeighTeacher);
routes.get("/college", CollegeTeacher);

export default routes;

