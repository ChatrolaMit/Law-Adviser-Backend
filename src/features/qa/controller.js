const qa = require('./mongo')


const httpGetAllQa =async (req,res)=>{
    console.log(req.body )
    const result = await qa.find();
    res.send(result);
}
const httpPostQue = async (req,res)=>{
    const data = req.body;
    console.log(data);
    const que = new qa(data)
    const result = await que.save();
    res.send(result);
}


const httpPostAns= async (req,res)=>{
    const { id } = req.params
    const data = req.body
    console.log(id)
    console.log(data);
    const result = await qa.findByIdAndUpdate(id,
        { $push: { answers: data }},
        { new: true })
    res.send(result );
}
const httpDownVote= async (req,res)=>{
    const { id,aid } = req.params    
    const result =   await qa.findOneAndUpdate(
        { _id: id, 'answers._id': aid },
        {
          $inc: {'answers.$.downvote': 1}
        }
       );
    res.send({ok:true});
}
const httpUpVote= async (req,res)=>{
    const { id,aid } = req.params    
    const result =   await qa.findOneAndUpdate(
        { _id: id, 'answers._id': aid },
        {
          $inc: {'answers.$.upvote': 1}
        }
       );
    res.send({ok:true});
}

// const httpUpVote = async(req,res) =>{
//     res.send(await getAdvocate(req.params.id))
// }

module.exports ={ httpGetAllQa, httpPostQue,httpPostAns, httpUpVote,httpDownVote} 
