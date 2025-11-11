import mongoose from '../config/db.js';

let StuSchema = mongoose.Schema({
      name : String,
      age :Number,
      city: String
}, {collection : "sample"})

let pro = mongoose.model("sample", StuSchema);
export default pro;