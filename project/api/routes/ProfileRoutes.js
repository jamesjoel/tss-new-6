import express from 'express'
import {MyProfile} from '../controllers/ProfileController.js'
let routes = express.Router();

routes.get("/", MyProfile);

export default routes;