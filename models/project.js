const mongoose = require('mongoose');
const User=require('./users');
const Project = new mongoose.Schema({
    name:{
        type:String
    },
    clientname:{
        type:String
    },
    clientcountry:{
        type:String
    },
    description:{
        type:String
    },
    technologies:{
        type:String
    },
    users:[User.schema],
    notes:[{
        note:{type:String},
        name:{type:String},
        userId:{type:String},
        atTime:{type:Date,default:Date.now}
    }]
});

const project = module.exports = mongoose.model('Project',Project,'projects');

module.exports.addProject=function(newProject,callback){ 

    newProject.save(callback);

}

module.exports.getProjectById=function(projectId,callback)
{
    project.findById(projectId,callback);
}


module.exports.updateProject=function(objProject,callback){   
    project.findOneAndUpdate({"_id":objProject._id},{$set:{"notes":objProject.notes}}, {upsert: true,new:true},callback);
}

module.exports.deleteProjectNote=function(projectId,noteId,callback){
    project.findByIdAndUpdate(projectId,{$pull:{notes:{_id:noteId}}},callback);
}
