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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.use(cors());

// Set static Folder
app.use(express.static(path.join(__dirname,"public")));


// app.use((req,res,next)=>{

//     const url = req.url;
//     console.log(url);

//     // check header or url parameters 

//     if(url!="/users/authenticate")
//     {
//         var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
//         if(token){
//             jwt.verify(token,config.secret,(err,decoded)=>{
//                 if(err){
//                     console.log(err);
//                     return res.json({success:false,message:'Failed to authenticate token'});
//                 }
//                 else
//                 {
//                     req.decoded=decoded;
//                     next();
//                 }


//             })
//         }
//         else{
//             return res.send(403,{
//                 success:false,
//                 message:'No token provided'
//             });
//         }
//     }
//     else{
//         next();
//     }
// });

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

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