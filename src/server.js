const http = require('http')

const app = require('./app')
const PORT = process.env.PORT || 5000

const server = http.createServer(app) 

async function startServer(){
    app.listen(PORT , ()=>{
        console.log(`Listning on ${PORT}...`)
    })
}
startServer()