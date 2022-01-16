const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    sender:{type:String, required:true},
    text:{type:String,required:true,minlength:2,maxlength:500},
    date:{type:Date,default:Date.now }
})

const Message = mongoose.model('Message',messageSchema)
module.exports = Message