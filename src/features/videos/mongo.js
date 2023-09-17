const mongoose = require("mongoose")

const videosSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true ,
    },
    advocate:{
        type:String,
        required:true,
    },
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
    }
})

const videos = mongoose.model("videos",videosSchema)

module.exports=videos
