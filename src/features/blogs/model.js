const blogs = require('./mongo')

const addBlog = async(obj) =>{
    const result = await blogs.updateOne({title:obj.title},
        obj,
        {upsert:true})
    
    return result

}

const getAllBlogs = async() =>{
    const result = await blogs.find({}).limit(10).lean()

    return result
}

module.exports ={
    addBlog,
    getAllBlogs
}