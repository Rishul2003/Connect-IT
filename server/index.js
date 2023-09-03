require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');
const port =8000;
const cors=require('cors');
const allowheader=require("./config/middleware");
const passport=require('passport');
const passportjwt=require('./config/passport-jwt');

const mongoose=require('mongoose');
const db=require('./config/mongoose');
const app=express();
app.use(bodyParser());
app.use(cookieParser());

app.use(urlencoded());


app.use(allowheader.setheader);
app.use(cors({
    origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

}))
// app.use(passport.initialize());


app.use('/',require('./routes'));
const server=app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server  ${err}`)
    }
    console.log(`server is running on port ${port}`);
})

