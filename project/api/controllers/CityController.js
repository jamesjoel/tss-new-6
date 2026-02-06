import City from "../models/City.js";

import DoSendMail from '../helpers/SendMailHelper.js';

let GetAllCity = async(req, res)=>{
    let result = await City.find();
    res.send(result);
}
let SendMail = async(req, res)=>{
    await DoSendMail("james.steppingstone@gmail.com", "Hi", `<h2>Hi James....</h2>`);
    res.send({success:true});
}

export {GetAllCity, SendMail}