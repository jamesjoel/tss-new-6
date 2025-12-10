import EmpModel from "../models/EmpModel.js";
let GetAllEmployee = async(req, res)=>{
    let result = await EmpModel.find();
    res.send(result)
}


let SaveEmployee = async(req, res)=>{
    // console.log(req.body);
    let data = req.body;
    await EmpModel.create(data);
}

export {GetAllEmployee, SaveEmployee};