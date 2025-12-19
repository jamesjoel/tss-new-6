import express from 'express'
import CityRoutes from './CityRoutes.js'
import UserRoutes from './UserRoutes.js'
import CategoryRoutes from './CategoryRoutes.js'
import SubCategoryRoutes from './SubCategoryRoutes.js'
import UserAuthRoutes from './UserAuthRoute.js'
import ProfileRoutes from './ProfileRoutes.js'
import AdminAuthRoutes from './AdminAuthRoutes.js'
let routes = express.Router();

routes.use("/api/v1/city", CityRoutes);
routes.use("/api/v1/user", UserRoutes);
routes.use("/api/v1/category", CategoryRoutes);
routes.use("/api/v1/subcategory", SubCategoryRoutes);
routes.use("/api/v1/auth", UserAuthRoutes);
routes.use("/api/v1/profile", ProfileRoutes);
routes.use("/api/v1/adminauth", AdminAuthRoutes);

export default routes;