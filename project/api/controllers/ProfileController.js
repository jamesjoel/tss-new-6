import jwt from 'jsonwebtoken'
import User from '../models/User.js'
let MyProfile = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, "hello");
        if(obj){
            let result = await User.find({_id : obj.id});
            res.send({success:true, result : result[0]});
        }else{
            res.send({success:false});
        }

    }else{
        res.send({success:false});
    }
}

export {MyProfile}