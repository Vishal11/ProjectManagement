const express = require('express');
const router = express.Router();
const Country = require('../models/country');
const config = require('../config/database');

router.get('/countries',(req,res)=>{
    var query={}
    Country.find(query,(err,countries)=>{
        if(err){
            res.send({success:false,countries:null});
        }
        else
        {
            res.send({success:true,countries:countries});
        }
    });
});

module.exports=router;