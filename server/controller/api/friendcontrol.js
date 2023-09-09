const User=require('../../models/user');
const Friends=require('../../models/friends');
const jwt=require('jsonwebtoken');
module.exports.getfriend=async function(req,res){
    try{
        // console.log("FRIENDS M HU")
        // console.log(req.body);
        const tokken=req.headers.jwt;
        if(!tokken){
            return res.status(401).json("NOT LOGGED IN");
        }
        let verificate=await jwt.verify(tokken,process.env.passportjwt);
        // console.log(req.query.current,req.query.view);
        const checkfriend=await Friends.findOne({from_user:req.body.input.currentuser,to_user:req.body.input.user});
        // console.log(checkfriend);
        if(checkfriend){
            return res.status(200).json(true);
        }
        return res.status(200).json(false);

    }
    catch(err){
        return res.status(401).json(err);
    }
}

module.exports.toggle=async function(req,res){
    try{
        console.log("FRIENDS M HU")
        console.log(req.body);
        const tokken=req.headers.jwt;
        if(!tokken){
            return res.status(401).json("NOT LOGGED IN");
        }
        let verificate=await jwt.verify(tokken,process.env.passportjwt);
        const checkfriend=await Friends.findOne({from_user:req.body.input.currentuser,to_user:req.body.input.user});
        if(checkfriend){
            await Friends.deleteOne({from_user:req.body.input.currentuser,to_user:req.body.input.user});
            await User.findByIdAndUpdate(req.body.input.currentuser,{$pull:{friends:req.body.input.user}});
            return res.status(200).json({
                messge:"UNFOLLOWED SUCCESSFULLY",
                data:false
            })
        }
        let newfrnd=await Friends.create({
            from_user:req.body.input.currentuser,
            to_user:req.body.input.user
        })
        let user1=await User.findById(req.body.input.currentuser);
        user1.friends.push(req.body.input.user);
        user1.save();
        return res.status(200).json({
            messge:"FOLLOWED SUCCESSFULLY",
            data:true
        })

    }
    catch(err){
        return res.status(401).json(err);
    }
}