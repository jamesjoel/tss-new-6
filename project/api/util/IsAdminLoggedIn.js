import jwt from 'jsonwebtoken'
import {ENC_KEY} from '../config/config.js'
let IsAdminLoggedIn = (req, res, next)=>{
     if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, ENC_KEY);
        if(obj){
            req.userobj = obj;
            next();
        }else{
            res.send({success:false, msg : "Un-Authorized User"})
        }
     }
     else{
        res.send({success:false, msg : "Un-Authorized User"})
     }
}

export default IsAdminLoggedIn;