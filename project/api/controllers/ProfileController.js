import jwt from 'jsonwebtoken'
import User from '../models/User.js'
let MyProfile = async(req, res)=>{
    let result = await User.find({_id : req.userobj.id}, ["-password", "-image", "-status", "-_id", "-updatedAt", "-createdAt"]);
    res.send({success:true, result : result[0]});
   
}
let MyProfilePic = async(req, res)=>{
    let result = await User.find({_id : req.userobj.id}, ["-password", "-status", "-_id", "-updatedAt", "-createdAt"]);
    res.send({success:true, result : result[0]});
   
}

export {MyProfile, MyProfilePic}