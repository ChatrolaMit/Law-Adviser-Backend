const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true 
    },
    userId: {
        type: String,
        required: true,
    },
    que: {
        type: String,
        required: true,
    },
    answers:[ {
        advocateId:{
            type: String,
            required: true,  
        },
        ans:{
            type: String,
            required: true,  
        },
        upvote:{
            type :Number,
            default:0
        },
        downvote:{
            type :Number,
            default:0
        }
    }],
});

const qa = mongoose.model('qa', qaSchema);

module.exports = qa