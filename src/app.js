const express = require('express')
const cors = require("cors")
const advocate = require('./features/advocateProfile/routes');
const qaRouter = require('./features/qa/routes')
const morgan = require('morgan');
const { mongoConnect } = require('./config/mongo.connect');
const blogs = require('./features/blogs/router');
const articals = require('./features/articals/router');
const videos = require('./features/videos/router');

const app = express()
const PORT = process.env.PORT || 5000
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.use('/law-adviser',advocate)
app.use('/',qaRouter)

app.use('/blogs',blogs)
app.use('/articles',articals)
app.use('/videos',videos)


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
   


