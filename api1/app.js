import express from 'express';

let app = express();

// http://localhost:3000/api/v1/city

app.get("/api/v1/city", (req, res)=>{

    

    res.send(city);

})

app.get("/api/v1/student", (req, res)=>{
    
    res.send(stu)
})


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server Running With Port", PORT)
})