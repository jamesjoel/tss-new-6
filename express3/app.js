import express from 'express';

const app = express();

// routes create 

app.get("/", (req, res)=>{
    res.send("<h1>home page</h1>");
});


app.get("/help", (req, res)=>{
    res.send("<h1>help page</h1>")

});


app.get("/about", (req, res)=>{
    res.send("<h1>about page</h1>")

});


app.listen(3000, ()=>{
    console.log("Server Running");    
})

/*
    flipkart.com/  (domain) --- home
    
    flipkart.com/about   -- about
    flipkart.com/help    -- help
    flipkart.com/login    -- login

    


*/