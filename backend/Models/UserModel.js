import  mongoose from 'mongoose';
const {Schema} = mongoose;
import passportLocalMogoose from 'passport-local-mongoose'

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique: true 
    },

    isVerified:{
        type:Boolean,
        default:false
    },

    verificationToken:{
        type:String
    },

    verificationTokenExprires:{
        type:Date
    },

    phone:{
        type:Number,
        required:true
    }

});

userSchema.plugin(passportLocalMogoose);  // add username, salt, and hash etc

const USERMODEL =  mongoose.model("USERMODEL",userSchema);

export default USERMODEL;