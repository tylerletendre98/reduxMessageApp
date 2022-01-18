const Message = require('../models/message');
const User = require('../models/User');
const express = require('express');
const router = express.Router();

// router.post('/sendMessage/:senderId', async (req,res)=>{
//     try{
//         const sender = await User.findById(req.params.senderId)
//         const newMessage = new Message({
//             sender:sender,
//             text:req.body.text
//         })
//         return res.send(newMessage)
//     }
//         catch(ex){
//             return res.status(500).send(`Internal server Error:${ex}.`)
//         }
// })

module.exports = router