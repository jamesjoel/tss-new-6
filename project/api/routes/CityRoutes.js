import express from 'express';
import { GetAllCity, SendMail } from '../controllers/CityController.js';
let routes = express.Router();

routes.get("/", GetAllCity);
routes.get("/sendmail", SendMail)

export default routes;
