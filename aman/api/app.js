import express from 'express';
import {port} from './config/connect.js';
import router from './routes/allroutes.js';
let app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)
app.listen(port,()=>{
    console.log("server running port",port)
})
