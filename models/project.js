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
        userId:{type:String}
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
    project.findOneAndUpdate({"name":objProject.name},{$set:{"notes":objProject.notes}}, {upsert: true,new:true},callback);
}
