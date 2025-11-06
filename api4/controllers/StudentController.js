import mongoose from "mongoose";
mongoose.connect("mongodb+srv://jamessteppingstone_db_user:cLonaHpNNTvDys7o@cluster0.nnogiy2.mongodb.net/?appName=Cluster0");

let StuSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
}, {collection : "sample"})

let StuModel = mongoose.model("sample", StuSchema)


let GetAllStudent = async(req, res)=>{
    let data = await StuModel.find();
    res.send(data)
}

export {GetAllStudent}