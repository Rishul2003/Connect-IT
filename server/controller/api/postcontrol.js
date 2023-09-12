const Post=require("../../models/post");
const User=require("../../models/user");
const Likes=require("../../models/likes");
const Comment=require("../../models/comments");
const jwt=require('jsonwebtoken');
module.exports.getpost=async function(req,res){
    try{
        const tokken=req.headers.jwt;
        if(!tokken){
            return res.status(401).json("NOT LOGGED IN");
        }
        let verificate=await jwt.verify(tokken,process.env.passportjwt);
        // console.log(verificate);
        // console.log(req.query);
        if(req.query.userid!='undefined'){
            console.log("HELLO")
            console.log(req.query);
            let userid=req.query.userid;
            let posts=await Post.find({user:userid}).sort('-createdAt').populate('user').populate({
                path:'comments',
                populate:{
                    path : 'user'
                }
            });
            return res.status(200).json({
                message:"List of posts",
                posts:posts
            })

        }
        // else{
        let posts=await Post.find({}).sort('-createdAt').populate('user').populate({
            path:'comments',
            populate:{
                path : 'user'
            }
        });
        return res.status(200).json({
            message:"List of posts",
            posts:posts
        })
    }
    // }
    catch(err){
        console.log(err);
        return res.status(401).json(err);
    }
}
module.exports.createpost=async function(req,res){
    try{
        // console.log(req.body);
        // console.log(req.file);
        // console.log(req.headers.jwt);
        const tokken=req.headers.jwt;
        // console.log(tokken);
        const verificate=await jwt.verify(tokken,process.env.passportjwt);
        console.log(verificate);
        if(verificate){
            let post =await Post.create({
                user:verificate._id
            })
            if(req.file){
                post.image=req.file.path;
            }
            if(req.body.content){
                post.content=req.body.content;
            }
            await post.save();
            post=await post.populate('user')
            return res.status(200).json({
                message:"POST CREATED SUCCESSFULLY",
                newpost:post
            });       
        }
        
        
    }
    catch(err){
        console.log(err);
        return res.status(401).json(err);
    }
}


module.exports.destroy=async function(req,res){
    try{
        console.log("DESTROY");
        const tokken=req.headers.jwt;
        // console.log(tokken);
        const verificate=await jwt.verify(tokken,process.env.passportjwt);
        // console.log(verificate);
        let p1= await Post.findById(req.params['id']);
        if((p1.user)==(verificate._id)){
            await Likes.deleteMany({likeable:p1._id,OnModel:'Post'});
            await Likes.deleteMany({likeable:{$in: p1.comments}})
            await Post.deleteOne({_id:p1._id});
            await Comment.deleteMany({post:p1._id})
            // console.log("IN REQ>XHR");
            return res.json(200,{
                message:"Successfully deleted",
            })
        }
        else{
            return res.status(401).json({
                message:"Unauthorized  , You can not delete this post"
            })
        }
    }   
    catch(err){
        console.log(err)
        return res.json(500,{
            message:"I m=nternal server errror"
        })
    }
}