const mongoose = require('mongoose');

const advocateProfileSchema = new mongoose.Schema({
    profileIcon: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    workingFrom: {
        type: Date,
    },
    userRating: {
        type: Number,
        min: 0,
        max: 5, 
    },
    verified: {
        type: Boolean,
        default: false,
        required: true,
    },
    hallOfFrames: [{
        type: String,
    }],
    badges: [{
        type: String,
    }],
    languages: [{
        type: String,
    }],
    practiceArea: [{
        type: String,
    }],
    description: {
        type: String,
    },
    contactNumber: {
        type: String, 
    },
    emailId: {
        type: String,
    },
    enrollmentNumber: {
        type: String,
        required: true,
    },
    gender: {
        type: String, 
        required: true,
    },
    publicQuestionReply: [{
        type: String,
    }],
    courts: [{
        type: String,
        required: true,
    }],
    blogs: [{
        type: String,
    }],
    articles: [{ 
        type: String,
    }],
    videos: [{
        type: String,
    }],
    password:{
        type:String,
        required:true
    },
    ratedBy:{
        type:Number,
        required:true,
        default:0
    },
    reviews: [{
        personName: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0, 
            max: 5,
        },
        date: {
            type: Date,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    }],
});

const advocate = mongoose.model('AdvocateProfile', advocateProfileSchema);

module.exports = advocate