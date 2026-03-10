import express from 'express'
import cors from 'cors'

const app = express();
let free = [
    {
        name : "Medicaps",
        city : "indore"
    },
    {
        name : "LNCT",
        city : "Bhopal"
    },
    {
        name : "IPS",
        city : "indore"
    }
]

let paid = [
    {
        name : "Medicaps",
        city : "indore"
    },
    {
        name : "LNCT",
        city : "Bhopal"
    },
    {
        name : "IPS",
        city : "indore"
    },
    {
        name : "Acroplis",
        city : "indore"
    },
    {
        name : "Daksh",
        city : "dhar"
    }
]


app.use(cors());

app.get("/api/v1/college", (req, res)=>{
    res.send({result : free})
})

app.get("/api/v1/paid/:apikey", (req, res)=>{
    // console.log(req.get("origin"))
    let key = req.params.apikey;
    let domain = req.get("origin")

    res.send({result:paid})
})

app.listen(3000, ()=>console.log("server running"));