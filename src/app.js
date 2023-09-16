const express = require('express')
const cors = require("cors")
const path = require('path')
const advocate = require('./features/advocateProfile/routes');
const morgan = require('morgan');
const { mongoConnect } = require('./config/mongo.connect')

const app = express()
const PORT = process.env.PORT || 5000
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.use('/law-adviser',advocate)

app.get('/' , (req , res)=>{
    res.status(200).send("hello World")
})   




async function startServer(){
    await mongoConnect()
    app.listen(PORT , ()=>{
        console.log(`Listning on ${PORT}...`)
    })
}
startServer()
   


