import express from 'express';
import session from 'express-session';

const app = express();

const sessInfo = {
    secret: "sessisonsecretcode", resave: false, saveUninitialized: true,cookie:{secure:true,expires:7*24*60*60*1000, httpOnly:true }
};

const port = 8080;
app.use(session(sessInfo));

app.get('/', (req, res) => {
    
    res.send(`<h1>Hello ${req.query.name}</h1>`);

});

app.get('/name', (req, res) => {
    const{name = "anonymous"} = req.query;
    req.session.name = name;
    req.session.cookie.color = "red";
    res.send(`name sent`)

});

app.get('/greet', (req, res) => {
    const {name = "anonymous"} = req.session
    res.send(`<h2>hello ${name}</h2>`)

});

app.get('/reqcount', (req,res) => {

    if(req.session.count){
        req.session.count +=1;
    }else{
        req.session.count  =  1
    }
    
    
    res.send(`You sent a request ${req.session.count} times`);
});

app.get('/testsession', (req, res) => {
    console.log(req.session)
    res.send("sesstion tested")
});


app.listen(port, () => {
    console.log("Server running on port 8080")
});