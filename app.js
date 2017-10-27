const express = require("express");
//we didn't install path with dependencis because is a core module
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
//import config db and jwt secret
const config = require('./config/database');

/* module.exports = {
    //port:27017 is mongodb default port
    database: 'mongodb://localhost27017/meanauth',
    //for jwt auth
    secret: 'your secret'
} */

//Mongodb Connection
mongoose.connect('config.databse');

//to check if we are connected
//21:57 2
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' +config.database);
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

//Bosy parser enabled
app.use(bodyParser.json());

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
    console.log('Server started on port ' + port); //npm start
});

//callback with arrow function
//function like that
// app.listen(port, function(){}):
/* app.listen(port, function(){

}); */
