import city from "../citymodule/citymodel.js";
import dosendMail from "../helper/semdmailhelper.js";






let getall=async(req,res)=>{

    let result=await city.find()

    res.send(result)
}

let sendmail=async(req,res)=>{
   await dosendMail("ap873155@gmail.com","hello",`<h1>hello world</h2>`);
res.send({success:true});

}


export {getall,sendmail}