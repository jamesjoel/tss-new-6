import mongoose from "mongoose";
import {DB_URL} from './config.js'

mongoose
.connect(DB_URL)
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log("DB NOT Connected ", err);
})

export default mongoose;