import PositionModel from "../Models/PositionModel.js";

const positionController = async(req, res) => {
    try{
        const allData = await PositionModel.find({});
        if(allData){
            res.json({success:true, allData})
        }else{
            res.json({success:false, message:"Data Not Found."})
        }
      
    }catch(err){
        res.json({success:false, message: err.message })
    }
};

export default positionController