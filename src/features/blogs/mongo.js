const mongoose = require("mongoose")

const blogsSchema = new mongoose.Schema({
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
    },
    image:{
        type:String,
        required:true 
    }
})

const blogs = mongoose.model("blogs",blogsSchema)

module.exports=blogs
