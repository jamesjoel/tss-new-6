import mongoose from "../config/db.js"

let TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    class : Number,
    city : String
}, {collection : "sample5"})

let Teacher = mongoose.model("sample5", TeacherSchema);

export default Teacher;