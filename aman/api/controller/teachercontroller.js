import teacher from "../model/teachermodel.js";
let save=async(req,res)=>{
    let result=await teacher.create(req.body)
    res.send({success:true,result:result})
}
let  tupdate=async (req,res)=>{
    let id=req.params.id;
    let result=await teacher.updateMany({_id:id},req.body)
    res.send({success:true,result:result})
}
let tdelete=async (req,res)=>{
    let id=req.params.id;
    let result=await teacher.deleteMany({_id:id},req.body)
    res.send({success:true,result:result})
}
let getall=async(req,res)=>{
    let result=await teacher.find()
    res.send({success:true,result:result})
}
let getbyid=async(req,res)=>{
    let id=req.params.id;
    let result=await teacher.find({_id:id})
    res.send({success:true,result:result})
}
export{getall,getbyid,save,tupdate,tdelete}

 