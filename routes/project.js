const express = require('express');
const router = express.Router();
const Project = require('../models/project');


router.get('/projects',(req,res)=>{

    Project.find({},(err,projects)=>{
        if(err){
            res.send({success:false,projects:null});
        }
        else{
            res.send({success:true,projects:projects});
        }
    })

});

router.post('/add',(req,res)=>{

    let newProject = new Project({
        name:req.body.name,
        clientname:req.body.clientname,
        clientcountry:req.body.clientcountry,
        description:req.body.description,
        technologies:req.body.technologies,       
        users:req.body.users,
        notes:[]
    });

   
    Project.addProject(newProject,(err,project)=>{
        if(err){
            res.send({success:false,project:null});
        }
        else
        {
            res.send({success:true,project:project});
        }
    });

});

router.get('/detail/:id',(req,res)=>{

   Project.getProjectById(req.params.id,(err,project)=>{
        if(err){
            res.send({success:false,project:null});
        }
        else
        {
            res.send({success:true,project:project});
        }

   }) 
});

router.put('/update/:id',(req,res)=>{
    let updateProject = new Project({
        name:req.body.name,
        clientname:req.body.clientname,
        clientcountry:req.body.clientcountry,
        description:req.body.description,
        technologies:req.body.technologies,       
        users:req.body.users,
        notes:req.body.notes
        
    });

    Project.updateProject(updateProject,(err,project)=>{
        if(err){
            res.send({success:false,project:null});
        }
        else
        {
            console.log(project);
            res.send({success:true,project:project});
        }
    })

})


module.exports=router;