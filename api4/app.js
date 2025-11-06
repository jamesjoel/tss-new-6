import express from 'express'
import AllRoutes from './routes/AllRoutes.js'

const app = express();

app.use(AllRoutes);
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Running ", PORT);
})