const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String, required:true, minlength:2, maxlength:50},
    password:{type:String, required:true, minlength:6, maxlength:25},
    fullname:{type:String, required:true, minlength:2,maxlength:200},
    email:{type:String,required:true, maxlength:250},
    dateModified:{type:Date,default:Date.now}
});

const User = mongoose.model('User', userSchema);
module.exports = User

