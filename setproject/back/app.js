import express from 'express';
import cors from 'cors';
import Allroute from './routes/ALLroute.js';
import { port } from './config/conn.js';
import upload from 'express-fileupload';
// import Isuserloggedin from './util/isuserloggedin.js';
import PATH from 'path';

let app=express()
app.use(cors());
app.use(upload());
app.use(express.json())
app.use(express.urlencoded({succes:true}))
app.use(express.static(PATH.resolve()+"/assets"));
// app.use(Isuserloggedin)
app.use(Allroute)

app.listen(port,()=>{
    console.log("server running port",port)
})


// xsmtpsib-7aa1c5f8b9112f386d54a4bcbdb65479f6ce136850accabcd9420ae93787d868-Y6ejYHHjRjfTqjOO