const express = require("express");
//we didn't install path with dependencis because is a core module
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
//import config db and jwt secret
const config = require('./config/database');

//ro remove warning: 
/*(node:16564) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library
instead: http://mongoosejs.com/docs/promises.html */
mongoose.Promise = global.Promise;
//Mongodb Connection
mongoose.connect(config.database, { useMongoClient: true });

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});
  
// On Error
mongoose.connection.on('error', (err) => {
   console.log('Database error: '+err);
});

//initialiaze our app variable with express
const app = express();

const users = require('./routes/users');

//Port Number
//use whatever port you want
const port = 3000;

//Cors Middleware enabled
app.use(cors());

//Set Static Folder called public in my case or you we can called client because is rferred to frontend
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

//Bosy parser enabled
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
//now we need a strategy, chech npm passport-jwt strategy
require('./config/passport')(passport);


//redirect to whatver path is like localhost:3000/users/whatever_route
app.use('/users', users);

//Index Route
app.get('/', (req, res)=>{
    res.send('invalid Endpoint');
});


//Start Server
//LUNCH THE SERVER by prompt: npm start
//arrow function
app.listen(port, () => {
    console.log('Server started: http://localhost:3000 on port  ' + port); //npm start
});

//callback with arrow function
//function like that
// app.listen(port, function(){}):
/* app.listen(port, function(){

}); */
