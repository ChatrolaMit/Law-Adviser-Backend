const {addAdvocate, getAllAdvocates} = require('./model')

const httpAddAdvocate =async (req,res)=>{
    console.log(req.body)
    res.send(await addAdvocate(req.body))
}

const httpGetAdvocates = async (req,res)=>{
    res.send(await getAllAdvocates() )
}

module.exports = {
    httpAddAdvocate,
    httpGetAdvocates
}