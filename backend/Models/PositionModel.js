import { Schema,model } from "mongoose";

const PositionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const PositionModel =  model("PositionModel", PositionSchema);

export default PositionModel;