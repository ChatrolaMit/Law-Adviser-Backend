const {addAdvocate, getAllAdvocates} = require('./model')

const httpAddAdvocate =async (req,res)=>{
    res.send(await addAdvocate())
}

const httpGetAdvocates = async (req,res)=>{
    res.send(await getAllAdvocates() )
}

module.exports = {
    httpAddAdvocate,
    httpGetAdvocates
}