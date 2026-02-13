import Order from "../models/Order.js"
import Razorpay from 'razorpay'
import { RAZORPAY_KEY, RAZORPAY_SECRET } from "../config/config.js"

let rzpy = new Razorpay({
    key_id : RAZORPAY_KEY,
    key_secret : RAZORPAY_SECRET
})

let Payment = async(req, res)=>{
    let {amount} = req.body;
    try{
        const order = await rzpy.orders.create({
            amount : amount*100,
            currency : 'INR'
        });
        res.send({success:true, orderId : order.id})
    }catch(err){
        res.send({success:false})
    }
}

let Confirm = async(req, res)=>{
    // console.log(req.body);
    // return;
    // send a mail to custer
    await Order.create(req.body);
    res.send({success:true});

}

let GetAllOrderByUserId = async(req, res)=>{
    let id = req.userobj.id;
    let result = await Order.find({user_id : id}).populate("product_id").exec();
    res.send({success: true, result});
}

export {Payment, Confirm, GetAllOrderByUserId}