const mongo = require("mongoose")
const MONGO_URL = "mongodb://127.0.0.1:27017/law-adviser"

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