const Message=require("../../models/Message");
const Conversation=require("../../models/Conversation");
const jwt=require('jsonwebtoken');
module.exports.add=async function(req,res){
    try{
        // const tokken=req.headers.jwt;
        // // console.log(tokken);
        // if(!tokken){
        //     return res.status(401).json("NOT LOGGED IN");
        // }
        
        // let verificate=await jwt.verify(tokken,process.env.passportjwt);
        const message=await Message.create({
            conversationid:req.body.conversationid,
            sender:req.body.sender,
            text:req.body.text
        });
        // console.log(req.body);
        message.save();
        return res.status(200).json(message);
    }
    catch(err){
        return res.status(500).json(err);
    }
}
module.exports.check=async function(req,res){
    try{
        const tokken=req.headers.jwt;
        // console.log(tokken);
        if(!tokken){
            return res.status(401).json("NOT LOGGED IN");
        }
        
        let verificate=await jwt.verify(tokken,process.env.passportjwt);
        const message=await Message.find({
            conversationid:req.params.conversationid
        });
        return res.status(200).json(message);
    }
    catch(err){
        return res.status(500).json(err);
    }
}
