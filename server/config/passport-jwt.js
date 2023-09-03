const passport=require('passport');
const passportjwt=require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User=require('../models/user');
var opts={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.passportjwt
}
passport.use(new passportjwt(opts, async function(jwt_payload,done){
    try{
    console.log(jwt_payload);
    let user=await User.findById(jwt_payload._id);
    if(user){
        return done(null,user);
    }
    return done(null,false);
}
catch(err){
    return done (err,false);
}
}))

module.exports=passport;