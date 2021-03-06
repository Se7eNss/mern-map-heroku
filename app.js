const express = require('express')
const app = express();
const path = require ('path')

const errorMiddleware = require('./middlewares/errors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const pin = require('./routes/pin');
const user = require('./routes/user')

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.json());


app.use(express.static(path.join(__dirname,"build")));
app.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"build","index.html"))
});

app.use('',pin);
app.use('',user);

app.use(errorMiddleware);

module.exports= app