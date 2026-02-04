import {
    SaveAdmin,
    GetAllAdmin,
    GetAllAdminById,
    UpdateAdmin,
    DeleteAdmin
} from '../controllers/AdminController.js'

import express from 'express';

let routes = express.Router();

routes.get("/", GetAllAdmin)
routes.get("/:id", GetAllAdminById)
routes.post("/", SaveAdmin)
routes.put("/:id", UpdateAdmin)
routes.delete("/:id", DeleteAdmin)

export default routes;