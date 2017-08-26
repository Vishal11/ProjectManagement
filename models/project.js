const mongoose = require('mongoose');

const Project = new mongoose.Schema({
    name:{
        type:String
    },
    clientname:{
        type:String
    },
    clientCountry:{
        type:String
    },
    description:{
        type:String
    },
    technologies:{
        type:String
    },
    userId:{
        type:String
    }
});

const project = module.exports = mongoose.model('Project',Project,'projects');

module.exports.addProject=function(newProject,callback){

    newProject.save(callback);

}

