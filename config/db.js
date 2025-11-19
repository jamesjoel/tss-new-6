import mongoose from "mongoose";
import { DB_URL } from "./config.js";


mongoose
.connect(DB_URL)

.then(()=>{
    console.log("DB CONNECTED")
})


.catch((error)=>{
    console.log("DB NOT CONNECTED ", error)
})



export default mongoose;