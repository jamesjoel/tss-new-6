import SubCate from '../models/SubCategory.js';

let SaveSubCategory = async(req, res)=>{
    let result = await SubCate.create(req.body);
    res.send({success: true, result});
}
let GetAllSubCategory = async(req, res)=>{
    let result = await SubCate.find().populate("categoryId").exec();
    res.send({success: true, result});
}
let GetAllSubCategoryById = async(req, res)=>{
    let id = req.params.id;
    let result = await SubCate.find({_id : id });
    res.send({success: true, result : result[0]});
}
let UpdateSubCategory = async(req, res)=>{
    let id = req.params.id;
    let result = await SubCate.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let DeleteSubCategory = async(req, res)=>{
    let id = req.params.id;
    let result = await SubCate.deleteMany({_id : id});
    res.send({success: true, result});
}

export {SaveSubCategory, UpdateSubCategory, DeleteSubCategory, GetAllSubCategory, GetAllSubCategoryById};