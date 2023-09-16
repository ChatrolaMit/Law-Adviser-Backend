const express = require('express')
const path = require('path')
const advocate = require('./features/advocateProfile/routes');
const morgan = require('morgan');

const app = express()
const PORT =process.env.PORT || 3000;
app.use(morgan('combined'))
app.use(express.json())

app.use('/law-adviser',advocate)

app.get('/' , (req , res)=>{
    res.status(200).send("hello World")
})                      
   
module.exports = app;


