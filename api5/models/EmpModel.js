import db from '../config/db.js'

let EmpSchema = db.Schema({
    salary : Number,
    name : String,
    department : String
}, {collection : "sample2"})

let EmpModel = db.model("sample2", EmpSchema);

export default EmpModel;