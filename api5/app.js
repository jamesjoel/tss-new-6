import express from 'express';
import AllRoutes from './routes/AllRoutes.js'

let app = express();

app.use(express.json())
app.use(express.urlencoded({ extended : true }));
// these code is used for receiving data from
// front end (React)


app.use(AllRoutes);

let PORT = 3000;

app.listen(PORT, ()=>{
    console.log("server running with port ", PORT);
})

// http://localhost:3000/api/v1/employee