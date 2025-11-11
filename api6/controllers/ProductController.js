import ProductModel from '../models/ProductModel.js'

let SaveProduct = async (req, res)=>{
    await ProductModel.create(req.body);
    res.send({success:true});
}

export {SaveProduct}