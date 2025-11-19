import ProductModel from '../models/ProductModel.js'

let UpdateProductById = async(req, res)=>{
    let id = req.params.id;
    await ProductModel.updateMany({ _id : id }, req.body)
    res.send({success:true})
}

let GetProductById = async(req, res)=>{
    let id = req.params.id;
    let result = await ProductModel.find({_id : id});
    res.send(result)
}

let SaveProduct = async (req, res)=>{
    await ProductModel.create(req.body);
    res.send({success:true});
}
let GetAllProduct = async(req, res)=>{
    let result = await ProductModel.find();
    res.send(result)
}

let Demo = async(req, res)=>{
    let name = req.params.name;
    let age = req.params.age;
}

let GetAllProductByCategory = async(req, res)=>{
    let cate = req.params.catename;
    let result = await ProductModel.find({ category : cate });
    res.send(result);
}

let DeleteProductById = async(req, res)=>{
    let id = req.params.id;
    await ProductModel.deleteMany({_id : id});
    res.send({success:true});
}
let DeleteProductByCate = async(req, res)=>{
    let cate = req.params.cate;
    await ProductModel.deleteMany({category : cate});
    res.send({success:true});
}

export {SaveProduct, GetProductById, UpdateProductById, DeleteProductByCate, GetAllProduct, Demo, GetAllProductByCategory, DeleteProductById}