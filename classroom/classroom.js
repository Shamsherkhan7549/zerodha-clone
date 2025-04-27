import express from 'express'
import cookieParser from 'cookie-parser';

const app = express();

const port = 8080;

app.use(cookieParser("secretcode"))

app.get('/', (req , res) =>{

    res.send("<h1>app started</h1>");
    
})

app.get('/sendCookie', (req , res) =>{
    res.cookie("greet", "salam",{signed:true});
    res.send("cookies sent")
});

app.get('/getCookie', (req , res) =>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send("cookie recieved");
    
})

const sum = (a,b) => {
    console.log(a+b)
}

sum(1,2);

app.listen(port, ()=>{
    console.log("Server running on port 8080")
});


