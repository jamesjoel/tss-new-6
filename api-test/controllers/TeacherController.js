import Teacher from '../models/Teacher.js';


let SaveTeacher = async(req, res)=>{
    let result = await Teacher.create(req.body);
    res.send({success : true, result : result});
}
let UpdateTeacher = async(req, res)=>{
    let id = req.params.id;
    let result = await Teacher.updateMany({_id : id }, req.body);
    res.send({success : true, result : result});
}
let DeleteTeacher = async(req, res)=>{
    let id = req.params.id;
    let result = await Teacher.deleteMany({_id : id });
    res.send({success : true, result : result});
}
let GetAllTeacher = async(req, res)=>{
    let result = await Teacher.find();
    res.send({success : true, result : result});
}
let GetByIdTeacher = async(req, res)=>{
    let id = req.params.id;
    let result = await Teacher.find({_id : id});
    res.send({success : true, result : result});
}


export {SaveTeacher, UpdateTeacher, DeleteTeacher, GetAllTeacher, GetByIdTeacher};