import express from 'express';
let a=express();
import{port} from "./config.js";
import { student,product } from './json.js';
a.listen(port,()=>{
     console.log("server running port",port);
});
a.get("/api/v1/student",(a,b)=>{
    b.send(student);
});
a.get("/api/v1/product",(a,b)=>{
    b.send(product);
});