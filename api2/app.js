import express from 'express';
import {student, teacher} from './db/data.js'
import { PORT } from './config/config.js';


let app = express();
app.get("/api/v1/student", (req, res)=>{
    res.send(student)
})

app.get("/api/v1/teacher", (req, res)=>{
    res.send(teacher)
})

app.listen(PORT, ()=>{
    console.log("Server Running With Port ", PORT)
})