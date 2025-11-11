import express from 'express';
import ans from './routes/allroutes.js';
import { port } from './config/config.js';

let app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(ans);
app.listen(port,()=>{
    console.log("server running port",port);

});
















// username:
// aman

// // password:

// 00000aman

// link:
// mongodb+srv://aman:00000aman@cluster0.n0jmsyz.mongodb.net/?appName=Cluster0