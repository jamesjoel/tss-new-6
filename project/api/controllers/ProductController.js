import Pro from '../models/Product.js';
import jwt from 'jsonwebtoken'
import { ENC_KEY } from '../config/config.js';

let SaveProduct = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, ENC_KEY)
        if(obj){
            // console.log(req.body);return;
            let result = await Pro.create(req.body);
            res.send({success: true, result});
        }else{

            res.send({success:false})
        }
    }else{
        res.send({success:false})
    }
    
}
let GetAllProduct = async(req, res)=>{
    let result = await Pro.find().populate("categoryId").populate("subcategoryId").exec();
    res.send({success: true, result});
}



let GetAllProductById = async(req, res)=>{
    let id = req.params.id;
    let result = await Pro.find({_id : id }).populate("categoryId").populate("subcategoryId").exec();
    res.send({success: true, result : result[0]});
}
let UpdateProduct = async(req, res)=>{
    let id = req.params.id;
    let result = await Pro.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let DeleteProduct = async(req, res)=>{
    let id = req.params.id;
    let result = await Pro.deleteMany({_id : id});
    res.send({success: true, result});
}

export {SaveProduct, UpdateProduct, DeleteProduct, GetAllProduct, GetAllProductById};