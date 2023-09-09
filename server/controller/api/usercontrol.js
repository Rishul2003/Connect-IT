const User=require("../../models/user");
const Post=require("../../models/post");
const jwt=require('jsonwebtoken');

module.exports.getuser=async function(req,res){
    
    try{
        const tokken=req.headers.jwt;
        if(!tokken){
            return res.status(401).json("NOT LOGGED IN");
        }
        let verificate=await jwt.verify(tokken,process.env.passportjwt);
    const userid=req.params.userid;
    const user=await User.findById(userid);
    const {password,...others}=user._doc;
    if(user){
        return res.status(200).json({
            message:"user is there",
            data:others
        })
    }
    return res.status(500).json("NO USER FOUND")
    }
    catch(err){
        return res.status(401).json(err);
    }

}