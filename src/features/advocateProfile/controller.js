const {addAdvocate, getAllAdvocates,getAdvocate,getLogin} = require('./model')

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

const httpLogin = async(req,res)=>{
    res.send(await getLogin(req.body))
}

module.exports = {
    httpAddAdvocate,
    httpGetAdvocates,
    httpGetAdvocateById,
    httpLogin
}