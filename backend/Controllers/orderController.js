import OrderModel from "../Models/OrderModel.js";

const orderAddController = (req,res) => {
    try {
     let newOrder = new OrderModel(req.body);
 
     if(newOrder){
         newOrder.save();
         res.json({success:true, message:"Order Saved"})
     }else{
         res.json({success:false, message:"Order Not Saved"})
     }
     
    } catch (error) {
      res.json({success:true, message:error.message})
    }
    
 
 };

 const orderViewController = async(req, res)=>{
    try {
     let allOrders = await OrderModel.find({});
     if(allOrders){
         res.json({success:true, data: allOrders})
     }else{
         res.json({success:false, message:"Orders not available"})
 
     }
     
    } catch (error) {
     res.json({success:false, message:error.message})
    }
 }

 export default {orderViewController, orderAddController};