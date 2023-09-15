const http = require('http')

const app = require('./app')
const { mongoConnect } = require('./config/mongo.connect')
const PORT = process.env.PORT || 5000

const server = http.createServer(app) 

async function startServer(){
    await mongoConnect()
    app.listen(PORT , ()=>{
        console.log(`Listning on ${PORT}...`)
    })
}
startServer()