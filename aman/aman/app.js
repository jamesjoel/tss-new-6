import express from 'express';
import {port} from './config.js';
import routes from './Routes.js';
let a=express();
a.use(routes);

// a.get("", ()=>console.log("***********"))
a.listen(port,()=>{
    console.log("server running port",port);
});