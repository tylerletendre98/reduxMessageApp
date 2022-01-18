const User = require("../models/user")
const Message = require('../models/message')
const express = require('express');
const router = express.Router();


router.post('/newUser', async (req,res)=>{
    try{
        const newUser = new User({
            username:req.body.username,
            password: req.body.password,
            fullname:req.body.fullname,
            email:req.body.email
        })
        await newUser.save()
        return res.send(newUser)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/users',async(req,res)=>{
    try{
        const users = await User.find()
        res.send(users)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post('/login',async(req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username,password:req.body.password})
        res.send(user)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

router.get('/user/:userId',async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        res.send(user)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

router.post('/sendMessage', async (req,res)=>{
    try{
        const sender = await User.findOne({username:req.body.sender})
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
        const users = await User.find()
        const messages = []
        for (let index = 0; index < users.length; index++) {
            for (let x = 0; x < users[index].messages.length; x++) {
                messages.push(users[index].messages[x])
            }
        }
        return res.send(messages)
    }catch(ex){
        return res.status(500).send(`Internal server Error:${ex}.`)
    }
})

module.exports = router;