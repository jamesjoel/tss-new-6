
import productmodel from '../model/productmodel.js';

let saveproduct = async(req, res)=>{
  // console.log("************")
  console.log(req.body)
      await productmodel.create(req.body);
    res.send({success:true});
};


export {saveproduct};