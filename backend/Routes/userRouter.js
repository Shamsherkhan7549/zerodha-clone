import passport from 'passport';
import userController from '../Controllers/userController.js';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const userRoute = express.Router();
userRoute.post('/signup', userController.signUpController);
userRoute.post('/login', passport.authenticate('local',{failureRedirect:'/loginFailed'}) ,userController.loginController);
// userRoute.get('/verify/:token', userController.verifyUser);
// Logout
userRoute.post('/logout', userController.logoutController);
userRoute.get('/profile', userController.profileController);
userRoute.get('/loginFailed', userController.loginFailedController);

  
export default userRoute;
