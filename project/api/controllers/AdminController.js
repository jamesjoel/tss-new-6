import Admin from '../models/Admin.js'
import sha1 from 'sha1'
let SaveAdmin = async(req, res)=>{
        delete req.body.repassword;
        req.body.password = sha1(req.body.password);
        let result =await Admin.create(req.body);
        res.send({success:true, result})
}
let GetAllAdmin = async(req, res)=>{
    let result = await Admin.find({}, "-password");
    res.send({success: true, result});
}

let GetAllAdminById = async(req, res)=>{
    let id = req.params.id;
    let result = await Admin.find({_id : id });
    res.send({success: true, result : result[0]});
}
let UpdateAdmin = async(req, res)=>{
    let id = req.params.id;
    let result = await Admin.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let DeleteAdmin = async(req, res)=>{
    let id = req.params.id;
    let result = await Admin.deleteMany({_id : id});
    res.send({success: true, result});
}

export {SaveAdmin, UpdateAdmin, DeleteAdmin, GetAllAdmin, GetAllAdminById};
