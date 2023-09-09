const Comment=require('../../models/comments');
const Post=require('../../models/post');
const like=require('../../models/likes');
const jwt=require('jsonwebtoken');

module.exports.getlike=async function(req,res){
    try{
        // console.log("LIKE M HU")
        const tokken=req.headers.jwt;
        if(!tokken){
            return res.status(401).json("NOT LOGGED IN");
        }
        let verificate=await jwt.verify(tokken,process.env.passportjwt);
        let likeable;
        if(req.query.type=='Post'){
            likeable=await Post.findById(req.query.id).populate('likes');
        }
        let existlike=await like.findOne({
            likeable:req.query.id,
            OnModel:req.query.type,
            user:verificate._id
        });
        if(existlike){
            // console.log("EXIST LIKE")
            return res.status(200).json(true);
        }
        else{
            return res.status(200).json(false)
        }
    }
    catch(err){
        return res.status(401).json(err);
    }
}

module.exports.toggle=async function(req,res){
    try{
        // console.log("LIKE M HU")
        const tokken=req.headers.jwt;
        // console.log(tokken)
        if(!tokken){
            return res.status(401).json("NOT LOGGED IN");
        }
        let verificate=await jwt.verify(tokken,process.env.passportjwt);
        console.log(verificate);
        let likeable;
        let deletable;
        if(req.query.type=='Post'){
            likeable=await Post.findById(req.query.id).populate('likes');
        }
        let existlike=await like.findOne({
            likeable:req.query.id,
            OnModel:req.query.type,
            user:verificate._id
        });
        if(existlike){
            // console.log("EXIST LIKE")
            await likeable.likes.pull(existlike._id);
            likeable.save();
            await like.deleteOne({_id:existlike._id});
            deletable=true;
        }
        else{
            let newlike=await like.create({
                user:verificate._id,
                likeable:req.query.id,
                OnModel:req.query.type 
            })
            await likeable.likes.push(newlike._id);
            likeable.save();
            deletable=false;
        }
        return res.status(200).json({
            message:"REq successfull",
            data:deletable
        })
    }catch(err){
        return res.status(401).json(err);
    }
}