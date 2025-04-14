import { Schema,model } from "mongoose";

const OrderSchema = new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String
});

const OrderModel = model("OrderModel", OrderSchema);

export default OrderModel;