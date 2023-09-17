const videos = require('./mongo')

const addVideo = async(obj) =>{
    const result = await videos.updateOne({title:obj.title},
        obj,
        {upsert:true})
    
    return result

}

const getAllVideos = async() =>{
    const result = await videos.find({}).lean()

    return result
}

module.exports ={
    addVideo,
    getAllVideos
}