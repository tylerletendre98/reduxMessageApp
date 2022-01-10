const User = require("../models/user")
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

module.exports = router;