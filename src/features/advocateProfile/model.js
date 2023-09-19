const advocate = require('./mongo')

const addAdvocate = async (obj) =>{
    
    const result = await advocate.updateOne(
        { enrollmentNumber: obj.enrollmentNumber },
        obj,
        { upsert: true }
    );
    delete obj.password;
     
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

  const getLogin = async(data) =>{
  let result ;
    if(data.type=="enrollmentNumber"){
      result = await advocate.findOne({enrollmentNumber:data.enrollmentNumber}).lean()
    }
    else if(data.type =="emailId"){
      result = await advocate.findOne({emailId:data.emailId}).lean()
    }else if(data.type =="contactNumber"){
      result = await advocate.findOne({contactNumber:data.contactNumber}).lean()
    }else{
      return {result:false,
              data:{},
            message:"Improper input"}
    }
    if(result.password  === data.password){
      return {result:true,
        data:result,
      message:"Login Successfull"}
    }else{
      return {result:false,
        data:{},
      message:"please enter valid password"}
    }

    

  }

  

module.exports = {
    addAdvocate,
    getAllAdvocates,
    getAdvocate,
    getLogin
}