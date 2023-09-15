const mongoose = require('mongoose')

const advocateProfile = new mongoose.Schema({
    profileIcon:{
        type:String 
    },
    name:{
        type :String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    location:{
        type:String,
    },
    workingFrom:{
        type:Date
    },
    userRating:{
        type:Number,
        
    },
    verified:{
        type:Boolean,
        default:false,
        required:true,
    },
    hallOfFrames:[{
        type:String,
    }],
    badges:[{
        type:String,

    }],
    languages:[{
        type:String,
    }],
    practiceArea:[{
        type:String 
    }],
    description:{
        type:String 
    },
    contactNumber:{
        type:Number,
    },
    emailId:{
        type:String,
    },
    enrollmentNumber:{
        type:String,
        required:true
    },
    gender:{
        typr:String,
        require:true
    },
    publicQuestionReply:[{
        type:String
    }],
    courts:[{
        type:String,
        required:true,
    }],
    blogs:[{
        type:String
    }],
    articals:[{
        type:String,
    }],
    videos:[{
        type:String,
    }],
    reviews:[{
        personName:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true,
        },
        date:{
            type:Date,
            required:true
        },
        message:{
            type:String,
            required:true
        }
    }],
})

const advocate = mongoose.model('advocateProfile',advocateProfile)

const addAdvocate = async () =>{
    const obj = {
        profileIcon:"https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png",
        name:"Alive047",
        designation:"Advocate",
        location:"Ahmedabad",
        workingFrom:new Date("2022-01-01"),
        userRating:'4.5',
        varified:"true",
        hallOfFrames:["https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png"],
        badges:["https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png"],
        languages:["hindi","english","gujarati"],
        practiceArea:["criminal cases","divorse and marrage","accident"],
        description:"i am lawyer since 2003 and i have 20+years of experience and i have worked in high court",
        contactNumber:9867896354,
        emailId:"alivehitman047@gmail.com",
        enrollmentNumber:"200170942454",
        gender:"male",
        publicQuestionReply:["12","13","14"],
        courts:["ahmedabad court of Justice", "Gujarat High Court", "Supreme Court of India"],
        blogs:["https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png"],
        articals:["https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png"],
        videos:["https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png"],
        reviews:[
            {
                personName:"Hitman",
                rating:"4",
                date:new Date("2021-2-21"),
                message:"advocate id very kind and very helpful"
            },
            {
                personName:"Hitman",
                rating:"4",
                date:new Date("2021-2-21"),
                message:"advocate id very kind and very helpful"
            },
            {
                personName:"Hitman",
                rating:"4",
                date:new Date("2021-2-21"),
                message:"advocate id very kind and very helpful"
            },
        ]
        
    } 
    result = await advocate.updateOne(
        { enrollmentNumber: obj.enrollmentNumber },
        obj,
        { upsert: true }
    );

}
