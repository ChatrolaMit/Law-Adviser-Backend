const mongo = require("mongoose")
require("dotenv").config()

const MONGO_URL = process.env.MONGO_URL

mongo.connection.once('open', ()=>{
    console.log("Mongo Connection is ready")
})

mongo.connection.on('error',(error)=>{
    console.log(`Ooops!, Error occured ${error}`)
})

async function mongoConnect(){
    await mongo.connect(MONGO_URL, {
        useNewUrlParser : true , 
        // useFindAndModify : false ,
        // useCreateIndex : true ,
        useUnifiedTopology : true
    })
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
} 