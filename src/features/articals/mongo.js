const mongoose = require("mongoose")

const articalsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true ,
    },
    colleboraters:[{
        type:String,
        required:true,
    }],
    date:{
        type:Date,
        required:true,
    },
    upvote:{
        type:Number,
        required:true,
        default:0
    },
    downvote:{
        type:Number,
        required:true,
        default:0
    },
    description:{
        type:String ,
        required:true,
    },
    image:{
        type:String,
        required:true 
    }
})

const articals = mongoose.model("articals",articalsSchema)

module.exports=articals
