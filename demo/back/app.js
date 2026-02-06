import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import Path from 'path';

const DB_URL = "mongodb+srv://jamessteppingstone_db_user:cLonaHpNNTvDys7o@cluster0.nnogiy2.mongodb.net/?appName=Cluster0";
mongoose
.connect(DB_URL)
.then(()=>console.log("DB CONNECTED"))
.catch((err)=>console.log("DB NOT CONNECTED", err))

const City = mongoose.model("city", mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"}));

const app = express();
const root = Path.join(Path.resolve()+"/dist");


app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.get("/api/v1/city", async(req, res)=>{
    let result = await City.find();
    res.send(result);
})

app.get('/{*splat}', (req, res)=>{
    res.sendFile("index.html", {root})
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running with port ", port);
})