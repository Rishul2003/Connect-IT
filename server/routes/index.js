const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
router.get('/',function(req,res){
    return res.end("HI");
})
router.use('/api',require('./api'));
module.exports=router;