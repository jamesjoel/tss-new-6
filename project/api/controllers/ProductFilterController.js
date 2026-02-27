//   http://localhost:3000/api/v1/filter?color=Red
import Product from '../models/Product.js'
let GetAllProduct = async(req, res)=>{
    
    let where = {};
    if(Object.keys(req.query).length == 0){ // if query string is empty
        where = {};
    }
    if(req.query.color){
        where.color = req.query.color;
    }
    if(req.query.discount){
        where.discount = {$gte : req.query.discount};

    }
    
    let result = await Product.find(where).populate("categoryId").populate("subcategoryId").exec();
    res.send({success:true, result : result});

}

export {GetAllProduct}

/*
   http://localhost:3000/api/v1/filter
   http://localhost:3000/api/v1/filter?color=Red
   http://localhost:3000/api/v1/filter?discount=10
   http://localhost:3000/api/v1/filter?discount=10&color=Red

*/