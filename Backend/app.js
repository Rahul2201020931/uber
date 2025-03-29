const dotenv =require('dotenv');
dotenv.config();
const express = require('express');
const cors=require('cors');
const app=express();
app.use(cors());
const connectToDb=require('./db/db');
connectToDb();
app.get('/',(req,res)=>{
    res.send('hello');
});
module.exports=app; 