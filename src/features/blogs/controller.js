const {addBlog, getAllBlogs} = require('./model')

const httpAddBlog = async (req,res) =>{
    const obj = req.body 
    const result = await addBlog(obj)
    res.send(result)
}

const httpGetBlogs = async (req,res) =>{
    const result = await getAllBlogs()
    res.send(result)
}

module.exports={
    httpAddBlog,
    httpGetBlogs
}