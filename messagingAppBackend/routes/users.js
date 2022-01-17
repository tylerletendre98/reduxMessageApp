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

router.get('/login',async(req,res)=>{
    try{
        console.log(req.body)
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

router.post('/newMessage/:userId',async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const newMessage = new Message({
            sender: user.username,
            text:req.body.text 
        })
        newMessage.save()
        user.messages.push(newMessage)
        user.save();
        return res.send(user)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

module.exports = router;