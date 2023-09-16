const advocate = require('./mongo')

const addAdvocate = async (obj) =>{
    
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