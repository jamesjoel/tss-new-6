import express from 'express'
import {AllEmployee, EmployeeFinance, EmployeeMarketing, EmployeeOfficeLocal, EmployeeOfficeOutside} from '../controllers/EmployeeController.js'
let routes = express.Router();


routes.get("/", AllEmployee)
routes.get("/office/local", EmployeeOfficeLocal)
routes.get("/office/outside", EmployeeOfficeOutside)
routes.get("/marketing", EmployeeMarketing)
routes.get("/finance", EmployeeFinance)

export default routes;