import express from 'express';
import { All,primary,heigh,collage} from './Teachercontroller.js';

let Routes=express.Router();
Routes.get("/",All);
Routes.get("/primary",primary);
Routes.get("/heigh",heigh);
Routes.get("/collage",collage);
export default Routes;