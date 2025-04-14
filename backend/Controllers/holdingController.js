import HoldingModel from '../Models/HoldingModel.js'

const holdingController =  async(req, res) => {
    try{
        const allData = await HoldingModel.find({});
        if(allData){
            res.json({success:true, allData})
        }else{
            res.json({success:false, message:"Data Not Found."})
        }
      
    }catch(err){
        res.json({success:false, message: err.message })
    }
};

export default holdingController;