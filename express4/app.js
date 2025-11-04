import express from 'express';

let app = express();
// http://localhost:3000  --- URL
// http://flipkart.com/about/project/info/hello
/*
When we send JSON from any URL, then its (URL) called API
 
*/


app.get("/", (req, res)=>{

    // let a = "rohit sharma"; // string
    // let a = 1000; // number
    // let a = ["indore", "pune", "delhi", "bhopal"]
    // let a = { name : "rohit", age : 25, city : "mumbai" }
    // JSON - Java Script Object Notation
    // 100% ---- JSON

    let a = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "ajay",
            age : 20,
            city : "pune"
        },
        {
            name : "gaurav",
            age : 21,
            city : "indore"
        }
    ]

    res.send(a)
    // we can't send HTML code from server
    // we always send DATA from server
})






const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server Running With port ", PORT)
})