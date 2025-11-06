import express from 'express'
import ProdcutRoutes from './ProductRoutes.js'
import StudentRoutes from './StudentRoutes.js'
const routes = express.Router();

routes.use("/api/v1/product", ProdcutRoutes)
routes.use("/api/v1/student", StudentRoutes)

export default routes;