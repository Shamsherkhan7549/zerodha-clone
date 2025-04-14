import passport from "passport";
import USERMODEL from "../Models/UserModel.js";
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

// import sendEmail from "../utils/sendemail.js"; //own mailer logic
const url = process.env.VITE_FRONTEND_URL;
const signUpController = async(req, res) => {
   try{

    if(req.body){
        let {username, phone, email, password} = req.body;

        let verificationToken = crypto.randomBytes(32).toString('hex');
        let newUser =  new USERMODEL({username,email,verificationToken,verificationTokenExprires:Date.now()+3600000 ,phone}); // 1 hour
        let savedUser = await USERMODEL.register(newUser,password);

        // let verifyUrl = `process.env.VITE_FRONTEND_URL/verify/${verificationToken}`;  // frontend route
        // const res = await sendEmail(email,'Verify your account',`Click here to verify ${verifyUrl}`);
        // console.log(res);
       // return res.status(201).json({success:true, message:"Check your email to verify your account."})
       return res.json({success:true, message:"User registered sucessfully",user:savedUser});
      }else{
       return res.json({success:false, message: "User not registered"});
    }
    
   }catch(error){
    
    if(error.name === 'UserExistsError'){
        return res.status(400).json({success:false, message:"Username already exist"})
        
    }

    return res.status(500).json({success:false, message:"Server error"})

   }

}

const loginController = async(req, res) => {
 try {
  return res.redirect('/user/login/success')
 
 } catch (error) {
  
  return res.status(500).json({success:false, message:error.message})
  
 }

};

const loginSuccessController = (req, res) => {
    try{

      if(req.user) return res.status(200).json({success:true, message: "you are logged in", user:req.user})
    

    }catch(error){
     return res.status(500).json({success:false, message: error.message})

    }
}

const logoutController =  (req, res) => {

 try {
  req.logout((err) => {
    if (err) return res.status(500).json({success:false, error: 'Logout failed' });
    res.status(200).json({success:true, message: 'Logged out' });
  });
  
 } catch (error) {
  console.log(error.message);
 }
};

 const profileController = (req, res) => {  
    try {
      
      if(req.isAuthenticated()){
        res.status(200).json({success:true, user: req.user});
        
      }else{
        res.status(401).json({success:false, message:"user not loggedIn"})
      }
      
    } catch (error) {
      res.status(401).json({success:false, message:error.message})
      
    }
};

// export const verifyUser = async (req, res) => {
//     const { token } = req.params;
  
//     const user = await USERMODEL.findOne({
//       verificationToken: token,
//       verificationTokenExpires: { $gt: Date.now() }
//     });
  
//     if (!user) {
//       return res.status(400).json({ error: "Invalid or expired verification token." });
//     }
  
//     user.isVerified = true;
//     user.verificationToken = undefined;
//     user.verificationTokenExpires = undefined;
  
//     await user.save();
  
//     res.status(200).json({ message: "Email verified successfully. You can now login." });
//   };

export default {signUpController, loginController, logoutController, profileController, loginSuccessController};