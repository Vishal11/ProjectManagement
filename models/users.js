const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const UserSchema = mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

});

const User = module.exports = mongoose.model('User',UserSchema);


// Methods to interact with the database


    module.exports.getUserById=function(id,callback){
        User.findById(id,callback);
    }
    module.exports.getUserByUserName=function(username,callback){
        let query={username:username}
        User.findOne(query,callback);
    }
    module.exports.addUser=function(newUser,callback){
        console.log(newUser);
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err){
                    throw err;
                }

                newUser.password=hash;
                newUser.save(callback);
            })

        })

    }

    module.exports.getUsers=function(callback){
        User.find({},callback);
    }

    module.exports.getUserDetailsById=function(userId,callback){
        User.findById(userId,callback);
    }

    module.exports.comparePassword = function(candidatePassword,hash,callback){

        bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
            if(err) throw err;
            callback(null,isMatch);
        })
    }

    
