const express = require('express')
const path = require('path')
// require("dotenv").config();

const app = express()
const PORT =process.env.PORT || 3000;
app.use(express.json())

app.get('/' , (req , res)=>{
    res.status(200).send("hello000 World")
})                      
   
module.exports = app;


