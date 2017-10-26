const express = require("express");
//we didn't install path with dependencis because is a core module
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//initialiaze our app variable with express
const app = express();


//use whatever port you want
const port = 3000;

//callback with arrow function
//function like that
// app.listen(port, function(){}):
/* app.listen(port, function(){

}); */

//LUNCH THE SERVER by prompt: npm start
//arrow function
app.listen(port, () => {
    console.log('Server started on port ' + port); //npm start
});