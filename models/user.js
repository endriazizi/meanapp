const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//relative path to go at config folder containing db and jwt settings
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//('nameOfTheModel', NameofTheSchema)
const User = module.exports = mongoose.model('User', UserSchema);

//to use function outside: module.exports.functionNames() = function ()...
module.exports.getUserById = function (id, callback){
    //mongo's funtction findById
    User.findById(id, callback);
};

module.exports.getUserByUsername = function (username, callback){
    //mongo's funtction findOne's funtion we should create a query for that
    //is an onbject {}
    const query = {username: username}
    User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback){
    //bycript.genSalt() is a function that generate a random key to hash the passowrd -> take a look at bcryptjs documentations
    //(err, salt) is a callback's function
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          //  if(err) throw err; 
            newUser.password = hash;
            newUser.save(callback);
        });    
    });
};

module.exports.comparePassword = function (candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
        if (err) throw err;
        callback(null, isMatch);
    });
}