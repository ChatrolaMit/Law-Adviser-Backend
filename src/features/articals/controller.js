const {addArtical, getAllArticals} = require('./model')

const httpAddArtical = async (req,res) =>{
    const obj = req.body 
    const result = await addArtical(obj)
    res.send(result)
}

const httpGetArticals = async (req,res) =>{
    const result = await getAllArticals()
    res.send(result)
}

module.exports={
    httpAddArtical,
    httpGetArticals,
}