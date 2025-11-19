import mongoose from "../config/db.js";
let teacherschema=mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    gender:String
},{collection:"sample10"})

let teacher=mongoose.model("sample10",teacherschema)

export default teacher;