// Importing all the dependencies required
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const passport=require('passport');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const projects = require('./routes/project');
const misc = require('./routes/misc');
const config = require('./config/database');
const jwt = require('jsonwebtoken');
var multer = require('multer');
var fs = require('fs');




// mongoose connect
mongoose.connect(config.database);

mongoose.connection.on('connected',(req,res)=>{
    console.log('Mongo db connected db: '+config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log('Error in db conection: '+err)
});

// Initialize the app
const app = express();

// Declare the port
const port= process.env.PORT || 8090;

// Middleware

 var DIR = './uploads/';
 var ProjectId="";
 var storage = multer.diskStorage({
    destination: DIR,
    filename: function (req, file, cb) {
      
    //   crypto.pseudoRandomBytes(16, function (err, raw) {
    //     if (err) return cb(err)
  
        cb(null,ProjectId +"_"+ file.originalname)
    //  })
    }
  })
  
  var upload = multer({ storage: storage }).any();

// app.use(function (req, res, next) {
//  res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
//  res.setHeader('Access-Control-Allow-Methods', 'POST');
//  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//  res.setHeader('Access-Control-Allow-Credentials', true);
//  next();
// });



// app.use(multer({
//  dest: DIR}).any());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.use(cors());

// Set static Folder
app.use('/',express.static(path.join(__dirname,"public")));
app.use('/uploads',express.static(path.join(__dirname,"/uploads")));


// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// app.get('/project/file/upload/:id', function (req, res) {
//     res.end('file catcher example');
//   });
   
  app.post('/project/file/upload/:id', function (req, res) {       
    ProjectId=req.params.id;
    if(ProjectId){
    upload(req, res, function (err) {       
      if (err) {
        return res.end(err.toString());
      }   
      res.end('File is uploaded');
     });
    }
  });

// Set user route
app.use('/users',users);
app.use('/project',projects);
app.use('/misc',misc);


// Index route
app.get('/',(req,res)=>{
    res.send('Invalid Endpoint');
})

// Start the serve
app.listen(port,()=>{
    console.log('Server running on port '+port);
})