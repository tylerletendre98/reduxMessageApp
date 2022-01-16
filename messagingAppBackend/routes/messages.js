const express = require('express');
const router = express.Router()
const User = require('../models/user');
const Message = require('../models/message')

router.post('/newMessage/:senderId',async(req,res)=>{
    try{
        const user = await User.findById(req.params.senderId)
        const newMessage = new Message({
            sender:user,
            text:req.body.text
        })
        await newMessage.save()
        return res.send(newMessage)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/messages',async(req,res)=>{
    try{
        const messages = await Message.find()
        res.send(messages)
    }catch{
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

module.exports = router;