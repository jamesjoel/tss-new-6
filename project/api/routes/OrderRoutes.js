import express from 'express';
import { Payment, Confirm, GetAllOrderByUserId } from '../controllers/OrderController.js'
import IsUserLoggedIn from '../util/IsUserLoggedIn.js'
let routes = express.Router();

routes.post("/payment", IsUserLoggedIn, Payment);
routes.post("/confirm", IsUserLoggedIn, Confirm);
routes.get("/getall", IsUserLoggedIn, GetAllOrderByUserId);

export default routes;