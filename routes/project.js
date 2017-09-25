const express = require('express');
const router = express.Router();
const Project = require('../models/project');
var multer = require('multer');
var dir=require('node-dir');
var DIR = './uploads/';

// var upload = multer({dest: DIR,rename: function (fieldname, filename) {
//     return filename + Date.now();
//   },
//   onFileUploadStart: function (file) {
//     console.log(file.originalname + ' is starting ...');
//   },
//   onFileUploadComplete: function (file) {
//     console.log(file.fieldname + ' uploaded to  ' + file.path);
//   }});

// var storage = multer.diskStorage({ 
       
//     destination: function (req, file, cb) {
      
//       cb(null, DIR)
//     },
//     filename: function (req, file, cb) {
//       crypto.pseudoRandomBytes(16, function (err, raw) {
//         cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
//       });
//     }
//   });
//  var upload = multer({
//       dest: DIR}).any();

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

// router.get('/file/upload',(req,res)=>{   
//     res.end('file catcher example');
// });

// router.post('/file/upload',(req,res)=>{
  
//     // upload(req, res, function (err) {
//     //     console.log("file upload")
//     //     if (err) {
//     //       return res.end(err.toString());
//     //     }
//     //     console.log("file uploaded");
     
//     //     res.end('File is uploaded');
//     //   });
   
//     upload();
// });

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



// router.get('/doc/download', function (req, res) {       
//     res.send({success:true,files:"D:\\Sessions\\ProjectManagement\\uploads\\59a4084c9e3cca26c4a38e12_Vishal Latest CV.pdf"})
//     //res.download("D:\\Sessions\\ProjectManagement\\uploads\\59a4084c9e3cca26c4a38e12_Vishal Latest CV.pdf","59a4084c9e3cca26c4a38e12_Vishal Latest CV.pdf");
// });

router.get('/docs/:projectId',(req,res)=>{
    
        dir.readFiles(DIR,(err,content,next)=>{
            if (err) throw err;
            //console.log('content:', content);
            next();
    
        },
        function(err, files){
            if (err) throw err;
            res.send({success:true,files:files.filter(function(file){
                var id=file.split('\\')[1].split('_')[0];              
                if(id==req.params.projectId){
                    return file;
                }
            })});
        })
    
    })

// router.post('/docs/download',(req,res)=>{   
//     var file=__dirname.substring(0, __dirname.indexOf("\\routes"))+"\\"+req.body.file;    
//     console.log(file);
//     res.download(file,"59a4084c9e3cca26c4a38e12_Vishal Latest CV",(err)=>{
//         if(err){
//             console.log(err)
//         }
//     });
// })

router.delete('/note/delete/:projectid/:noteId',(req,res)=>{

    var projectId=req.params.projectid;
    var noteId=req.params.noteId;
    Project.deleteProjectNote(projectId,noteId,(err,project)=>{
        if(err)
        {                   
            res.send({success:false,project:null});
        }
        else
        {
            res.send({success:true,project:project});
        }
    })

})

router.delete('/delete/:id',(req,res)=>{

    var projectId=req.params.id;
    Project.deleteProject(projectId,(err,project)=>{
        if(err)
            {                   
                res.send({success:false,project:null});
            }
            else
            {
                res.send({success:true,project:project});
            }
    });

})

router.put('/update/:id',(req,res)=>{
    let updateProject = new Project({
        name:req.body.name,
        clientname:req.body.clientname,
        clientcountry:req.body.clientcountry,
        description:req.body.description,
        technologies:req.body.technologies,       
        users:req.body.users,
        notes:req.body.notes,
        "_id":req.body._id
        
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