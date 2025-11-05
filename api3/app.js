import express from 'express'
import routes from './routes/routes.js'

let app = express();

app.use(routes); // read all routes here

const PORT = 3000;


app.listen(PORT, ()=>{
    console.log("Server Running With PORT ", PORT)
})

/*
 :3000/api/v1/employee
 :3000/api/v1/employee/office/local
 :3000/api/v1/employee/office/outside
 :3000/api/v1/employee/marketing
 :3000/api/v1/employee/finance
 
*/
