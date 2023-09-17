const blogs = require('./mongo')
const advocate = require('../advocateProfile/mongo')

const addBlog = async (obj) => {
    const result = await blogs.updateOne({ title: obj.title },
        obj,
        { upsert: true })

    if (result.upsertedId) {
        const updateAdvocate = await advocate.updateOne(
            { _id: obj.advocate }, 
            { $addToSet: { blogs: result.upsertedId } })
        return updateAdvocate
    } else {
        return result
    }


}

const getAllBlogs = async () => {
    const result = await blogs.find({}).lean()

    return result
}

module.exports = {
    addBlog,
    getAllBlogs
}