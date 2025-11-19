import mongoose from "../config/db.js";

let ProSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String
}, { collection : "sample4"});

let Pro = mongoose.model("sample4", ProSchema)

export default Pro;