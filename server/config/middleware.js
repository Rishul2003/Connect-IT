module.exports.setheader= async function(req,res,next){
    await res.header("Access-Control-Allow-Origin",true);
    await res.header("Access-Control-Allow-Credentials",true);
    next();
}

