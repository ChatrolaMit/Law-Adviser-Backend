const articals = require('./mongo')
const advocate = require('../advocateProfile/mongo')

const addArtical = async(obj) =>{
    const result = await articals.updateOne({title:obj.title},
        obj,
        {upsert:true})
    
    if (result.upsertedId) {
        for(let key of obj.colleboraters){
            console.log(key)
            const updateAdvocate = await advocate.updateOne(
                { _id: key }, 
                { $addToSet: { articles: result.upsertedId } })
        }
        return result
    } else {
        return result
    }

}

const getAllArticals = async() =>{
    const result = await articals.find({}).lean()
    return result
}

module.exports ={
    addArtical,
    getAllArticals
}