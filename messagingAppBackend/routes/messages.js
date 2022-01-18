const Message = require('../models/message');
const User = require('../models/User');
const express = require('express');
const router = express.Router();

router.post('/sendMessage', async (req,res)=>{
    try{
        const sender = await User.find({username:req.body.sender})
        const newMessage = new Message({
            sender:sender.username,
            text:req.body.text
        })
        sender.messages.push(newMessage)
        sender.save()
        return res.send(sender)
    }
        catch(ex){
            return res.status(500).send(`Internal server Error:${ex}.`)
        }
})

router.get('/getMessages', async(req,res)=>{
    try{
        const Users = await User.find()
        const messages = []
        for (let index = 0; index < Users.length; index++) {
            for (let index = 0; index < Users[index].messages[index].length; index++) {
                messages.push(Users[index].messages[index])
            }
        }
        return res.send(messages)
    }catch(ex){
        return res.status(500).send(`Internal server Error:${ex}.`)
    }
})
module.exports = router