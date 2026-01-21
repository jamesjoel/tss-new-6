import express from 'express'
import {MyProfile, MyProfilePic} from '../controllers/ProfileController.js'
let routes = express.Router();

routes.get("/", MyProfile);
routes.get("/profilepic", MyProfilePic);

export default routes;