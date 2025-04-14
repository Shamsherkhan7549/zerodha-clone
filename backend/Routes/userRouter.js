import passport from 'passport';
import userController from '../Controllers/userController.js';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const userRoute = express.Router();
const url = process.env.VITE_FRONTEND_URL;
userRoute.post('/signup', userController.signUpController);
userRoute.post('/login',passport.authenticate('local',{failureRedirect:url+'/login'}) ,userController.loginController);
// userRoute.get('/verify/:token', userController.verifyUser);
// Logout
userRoute.post('/logout', userController.logoutController);
userRoute.get('/profile', userController.profileController);
userRoute.get('/login/success', userController.loginSuccessController);

  
export default userRoute;
