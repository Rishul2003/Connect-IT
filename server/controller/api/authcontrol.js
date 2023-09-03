const express=require('express');
const User=require('../../models/user');
const { json } = require('body-parser');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
module.exports.register=async function(req,res){
    try{
        console.log(req.body);
        let user=await User.findOne({email: req.body.email});
        if(user){
            return res.status(409).json("User already exist");
        }
        if(req.body.password!=req.body.confirmpassword){
            return res.status(409).json("Enter same password");

        }
        let u1=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        });
        u1.save();
        return res.status(200).json("User has been created");
    }
    catch(err){

        console.log("err  ",err);
        return res.status(500).json(
            err
        )
    }
}




module.exports.login=async function(req,res){
    // console.log(req.body);
    try{
    let user=await User.findOne({email : req.body.email});
    if(!user){
        return res.status(422).json({
            message:"Invalid email"
        })
    }
    else{
        const checkpass=await bcrypt.compare(req.body.password,user.password);
        if(!checkpass){
            return res.status(402).json({
                message:"wrong password"
            })
        }
        const {password,...others}=user._doc;
        // console.log(others)
        // console.log("response ",response);
        const token=jwt.sign(others,process.env.passportjwt,{expiresIn:'1000000'});
        res.cookie('jwt', token, { httpOnly: true, }).status(200).json({
            message:"Sign in successfully , here is your token please keep it safe",
            data:{
                token: token,
                user:others
            }
        })
    }

}
catch(err){
    console.log(" *** ",err);
    return res.status(500).json({
        message:"Internal server error"
    });
}
}
module.exports.logout=async function(req,res){

    try{
        
        res.clearCookie('jwt',{
            secure:true,
    sameSite:"none"
        });
        return res.status(200).json("LOgged out");
    }
    catch(err){
        console.log("** err",err);
    }
}