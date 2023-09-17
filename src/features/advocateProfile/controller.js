const {addAdvocate, getAllAdvocates,getAdvocate} = require('./model')

const httpAddAdvocate =async (req,res)=>{
    console.log(req.body )
    res.send(await addAdvocate(req.body))
}

const httpGetAdvocates = async (req,res)=>{
    res.send(await getAllAdvocates(req.params.page) )
}

const httpGetAdvocateById = async(req,res) =>{
    res.send(await getAdvocate(req.params.id))
}

module.exports = {
    httpAddAdvocate,
    httpGetAdvocates,
    httpGetAdvocateById
}