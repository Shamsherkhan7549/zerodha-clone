import mongoose from "mongoose";
import HoldingModel from "../Models/HoldingModel.js";
import PositionModel from "../Models/PositionModel.js";
import {holdings,positions} from "./data.js";

import dotenv from 'dotenv';
dotenv.config();

const url = "mongodb+srv://shamsherkhan7549:shamsher7549@cluster0.sb4z0.mongodb.net/zerodha?retryWrites=true&w=majority&appName=Cluster0";

main().then(result=>console.log("Mongoose Is Working.")).catch(err=> console.log("Error Found In Mongoose ", err));
async function main(){
    await mongoose.connect(url);
    console.log("DB Connected!")
};


const initDB = async() => {
    //const delData = await HoldingModel.deleteMany({});
    //const delData = await PositionModel.deleteMany({});
    //console.log("deleted data ", delData);
    //const result = await HoldingModel.insertMany(holdings);
    const result = await PositionModel.insertMany(positions);
    console.log("insertedData " , result)
};

//initDB();