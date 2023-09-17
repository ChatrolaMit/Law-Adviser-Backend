const advocate = require('./mongo')

const addAdvocate = async (obj) =>{
    
    const result = await advocate.updateOne(
        { enrollmentNumber: obj.enrollmentNumber },
        obj,
        { upsert: true }
    );
     
    return JSON.stringify(result)

}

const getAllAdvocates = async (page) => {
    const result = await advocate.find({}).lean();
  
    for (let obj of result) {
      delete obj.description;
      delete obj.emailId;
      delete obj.publicQuestionReply;
      delete obj.blogs;
      delete obj.articles;
      delete obj.videos;
      delete obj.reviews;
    }
  
    return JSON.stringify(result);
  };

  const getAdvocate = async (id) =>{
    console.log(id)
    const result = await advocate.findOne({_id:id}).lean()
    return JSON.stringify(result)
  }

  



module.exports = {
    addAdvocate,
    getAllAdvocates,
    getAdvocate
}