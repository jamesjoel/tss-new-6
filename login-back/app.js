import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post("/api/v1/auth", (req, res)=>{
    console.log(req.body)
    let { username, password} = req.body;
    if(username=="rohit@gmail.com")
    {
        if(password=="123"){
            let obj = { name : "rohit", age : 25, city : "indore", gender : "male" };
            let token = jwt.sign(obj, "my secrect key");
            res.send({success:true, token});

        }else{
            res.send({success:false, errType : 2});
        }
    }
    else{
        res.send({success:false, errType : 1});
    }
})

app.get("/api/v1/profile", (req, res)=>{
    if(req.headers.authorization){ // means ---- token come
        let token = req.headers.authorization;
        let obj = jwt.decode(token, "my secrect key");
        if(obj){ // means ---- token come and right token
            res.send(obj);

        }else{ // means --- token come but wrong token

            res.send({success: false, msg : "Un-Authorized User"})
        }

    }else{ // means --- token not come
        res.send({success: false, msg : "Un-Authorized User"})
    }
})

app.listen(3000, "0.0.0.0", ()=>console.log("Server Running"));


// http://192.168.0.107:3000/api/v1/auth
// http://192.168.0.107:3000/api/v1/profile