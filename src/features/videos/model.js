const videos = require('./mongo')
const advocate = require('../advocateProfile/mongo')

const addVideo = async(obj) =>{
    const result = await videos.updateOne({title:obj.title},
        obj,
        {upsert:true})
    
    if(result.upsertedId){
        const updateAdvocate = await advocate.updateOne({_id: obj.advocate},{ $addToSet: { videos: result.upsertedId } })
        return updateAdvocate
    }else{
        return result
    }

}

const getAllVideos = async() =>{
    const result = await videos.find({}).lean()

    return result
}

module.exports ={
    addVideo,
    getAllVideos
}