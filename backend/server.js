import dotenv from 'dotenv';
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import positionRoute from './Routes/positionRouter.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import holdingRoute from './Routes/holdingsRouter.js';
import orderRoute from './Routes/orderRouter.js';
import userRoute from './Routes/userRouter.js';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import USERMODEL from './Models/UserModel.js';



dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const url = process.env.MONGOURL;

const sessionOptions = {
    secret: "sessionsecret",
     resave:false, 
     saveUninitialized:true,
    cookie:{
        expires:7*24*60*60*1000,    
        orignMaxAge:7*24*60*60*1000,
        httpOnly:true,
    }
}

//Middleware
app.use(cors(
    {
        origin: "https://zerodha-clone-dashboard-xi.vercel.app",
    }
));

app.use(bodyParser.json());

app.use(session(sessionOptions))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(USERMODEL.authenticate()))

passport.serializeUser(USERMODEL.serializeUser());
passport.deserializeUser(USERMODEL.deserializeUser());

main().then(()=>console.log("Mongoose Is Working")).catch(err=>console.log(err));

async function main(){
    await mongoose.connect(url);
    console.log("DB Connected!");
}

app.get('/', (req, res) => {
    res.send("API Workinig");
});

app.use('/', holdingRoute);
app.use('/', positionRoute);
app.use('/', orderRoute);

app.use('/user', userRoute);








app.listen(port,()=>{
    console.log("server running on port 4000");
}); 