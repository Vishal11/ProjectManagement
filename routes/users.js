const express = require('express');
const router = express.Router();
const User = require('../models/users');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const passport = require('passport');


// register route
router.post('/register',(req,res,next)=>{
        
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    });
    User.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success:false,message:'Failed to register'});
        }
        else
        {
            res.json({success:true,message:'User registered with username: '+user.username});
        }
    })

})

// authenticate route
router.post('/authenticate',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    User.getUserByUserName(username,(err,user)=>{
    if(err) throw err;
    if(!user){
        return res.json({success:false,msg:'User not found'});
    }

    User.comparePassword(password,user.password,(err,isMatch)=>{
        if(err) throw err;
        if(isMatch){
            const token=jwt.sign(user,config.secret,{
                expiresIn:604800
            });


            res.json({
                success:true,
                token:"JWT "+token,
                user:{
                    id:user._id,
                    name:user.name,
                    username:user.username,
                    email:user.email,
                    isAdmin:user.isAdmin
                }
            })
        }
        else
        {
            return res.json({success:false,msg:'Wrong password'});
        }
    })
});

});


router.get('/users',(req,res)=>{

    User.getUsers((err,users)=>{
        if(err){
            res.send({success:false,users:null})
        }
        else
        {
            res.send({success:true,users:users})
        }
    })

});

router.get('/user/:id',(req,res)=>{

    User.getUserDetailsById(req.params.id,(err,user)=>{
        if(err){
            res.send({success:false,user:null})
        }
        else
        {
            res.send({success:true,user:user})
        }
    })

})


// Profile route
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;