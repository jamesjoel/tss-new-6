import express from 'express';
import routes from './teacherroutes.js';
let router=express.Router()

router.use("/api/v1/teacher",routes)

export default router;