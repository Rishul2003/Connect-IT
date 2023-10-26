const Conversation=require("../../models/Conversation");
const jwt=require('jsonwebtoken');
module.exports.getconv=async function(req,res){
    try{
        const tokken=req.headers.jwt;
        // console.log(tokken);
        if(!tokken){
            return res.status(401).json("NOT LOGGED IN");
        }
        
        let verificate=await jwt.verify(tokken,process.env.passportjwt);
        // console.log(req.params)
        const conv=await Conversation.find({
            member:{$in:[req.params.userid]}
        }) 
        res.status(200).json(conv);
    }
    catch(err){
        res.status(500).json(err);
    }
}
module.exports.newconv=async function(req,res){
    try{
        console.log(req.body);
        let conv=await Conversation.create({
            member:[req.body.senderid,req.body.receiverid]

        });
        conv.save();
        res.status(200).json(conv);
    }
    catch{
        res.status(500).json(err);
    }
}