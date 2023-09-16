const advocate = require('./mongo')

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
        ratedBy:5,
        publicQuestionReply:["12","13","14"],
        courts:["ahmedabad court of Justice", "Gujarat High Court", "Supreme Court of India"],
        blogs:["https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png"],
        articles:["https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png","https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Bitly-512.png"],
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
    const result = await advocate.updateOne(
        { enrollmentNumber: obj.enrollmentNumber },
        obj,
        { upsert: true }
    );

    return JSON.stringify(result)

}

const getAllAdvocates = async () =>{
    const result = await advocate.find({}) 
    return JSON.stringify(result)
}



module.exports = {
    addAdvocate,
    getAllAdvocates
}