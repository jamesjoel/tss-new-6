import express from 'express';
import { SaveUser, GetAllUser, DeleteAll, ProfilePic, ChangeStatus } from '../controllers/UserController.js';

let routes = express.Router();

routes.post("/", SaveUser);
routes.get("/", GetAllUser)
routes.get("/deleteall", DeleteAll)
routes.put("/profilepic", ProfilePic)
routes.put("/changestatus/:id", ChangeStatus)

export default routes;