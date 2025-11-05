import express from 'express';
let a=express();
import {port} from './config.js';
import { product } from './json.js';
import { emp } from './json.js';
import { owner } from './json.js';
a.listen(port,()=>{
    console.log("sever running port",port);
});
a.get("/api/v1/product",(a,b)=>{
   b.send(product)
});

a.get("/api/v1/emp",(a,b)=>{
    b.send(emp)
});
    a.get("/api/v1/owner",(a,b)=>{
      b.send(owner);
    });
    
    
