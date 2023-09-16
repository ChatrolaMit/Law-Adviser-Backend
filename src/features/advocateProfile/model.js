const advocate = require('./mongo')

const addAdvocate = async (obj) =>{
    
    const result = await advocate.updateOne(
        { enrollmentNumber: obj.enrollmentNumber },
        obj,
        { upsert: true }
    );

    return JSON.stringify(result)

}

const getAllAdvocates = async () => {
    const result = await advocate.find({}).lean();
  
    for (let obj of result) {
      delete obj.hallOfFrames;
      delete obj.badges;
      delete obj.description;
      delete obj.emailId;
      delete obj.gender;
      delete obj.publicQuestionReply;
      delete obj.courts;
      delete obj.blogs;
      delete obj.articles;
      delete obj.videos;
      delete obj.reviews;
    }
  
    return JSON.stringify(result);
  };
  



module.exports = {
    addAdvocate,
    getAllAdvocates
}