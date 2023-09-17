const {addVideo, getAllVideos} = require('./model')

const httpAddVideo = async (req,res) =>{
    const obj = req.body 
    const result = await addVideo(obj)
    res.send(result)
}

const httpGetVideos = async (req,res) =>{
    const result = await getAllVideos()
    res.send(result)
}

module.exports={
    httpGetVideos,
    httpAddVideo
}