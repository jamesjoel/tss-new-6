import a from 'express';
let b = a();
import {port} from './port.js';
import {owner} from './own.js';
import {emp} from './employe.js';
import { product } from './product.js';
b.listen(port, ()=>{
    console.log("server run---",port)
})
b.get("/api/v1/employe",(req,res)=>{
    res.send(emp)
});
b.get("/api/v1/product",(req,res)=>{
    res.send(product)
});
b.get("/api/v1/owner",(req,res)=>{
    res.send(owner)
});
