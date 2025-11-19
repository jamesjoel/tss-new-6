import mongoose from "mongoose";
import {db_url} from '../config/connect.js';
mongoose.connect(db_url)
.then(()=>{
    console.log("db connect..")
})
.catch((err)=>{
    console.log("db not connect....",err)
})
export default mongoose;