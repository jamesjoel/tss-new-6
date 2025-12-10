import express from 'express';
import { PORT } from './config/config.js';
import AllRoutes from './routes/AllRoutes.js'
let app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(AllRoutes);

app.listen(PORT, ()=>{
    console.log("Server Running with Port ", PORT)
})
