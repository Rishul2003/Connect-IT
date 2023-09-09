const Comment=require('../../models/comments');
const Post=require('../../models/post');
const like=require('../../models/likes');
const jwt=require('jsonwebtoken');
module.exports.create=async function(req,res){
    try{
        console.log("INSIDE COMMENT CREATE")
    
        const tokken=req.headers.jwt;
        if(!tokken){
            return res.status(401).json("NOT LOGGED IN");
        }
        let verificate=await jwt.verify(tokken,process.env.passportjwt);
        console.log(verificate);    
        let postid=req.query.postid;
        let content=req.body.content;
        let poste= await Post.findById(postid);
        if(poste){
            let comm=await Comment.create({
                content:content
                ,post:poste._id,
                user:verificate._id
            })
        
        poste.comments.push(comm);
        await poste.save();
        await comm.populate('user');
        let allcomment=poste.comments;
        return res.status(200).json({
            message:"COMMENT CREATED",
            comment:comm,
            allcomm:allcomment
        })
    }

    }
    catch(err){
        return res.status(401).json(err);
    }
}