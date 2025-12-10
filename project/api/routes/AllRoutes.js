import express from 'express'
import CityRoutes from './CityRoutes.js'
import UserRoutes from './UserRoutes.js'
import CategoryRoutes from './CategoryRoutes.js'
import SubCategoryRoutes from './SubCategoryRoutes.js'
let routes = express.Router();

routes.use("/api/v1/city", CityRoutes);
routes.use("/api/v1/user", UserRoutes);
routes.use("/api/v1/category", CategoryRoutes);
routes.use("/api/v1/subcategory", SubCategoryRoutes);

export default routes;