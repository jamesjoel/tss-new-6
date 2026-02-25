import express from 'express';
// import { PORT } from './config/config.js';
import AllRoutes from './routes/AllRoutes.js'

import cors from 'cors'
import upload from 'express-fileupload';
import PATH from 'path';

let app = express();

app.use(cors());
app.use(upload());
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(express.static(PATH.resolve()+"/assets"));



app.use(AllRoutes);


let PORT = process.env.PORT;

app.listen(PORT, ()=>{
  console.log("welcome");
    console.log("Server Running With Port ", PORT);
})