const articals = require('./mongo')

const addArtical = async(obj) =>{
    const result = await articals.updateOne({title:obj.title},
        obj,
        {upsert:true})
    
    return result

}

const getAllArticals = async() =>{
    const result = await articals.find({}).lean()
    return result
}

module.exports ={
    addArtical,
    getAllArticals
}