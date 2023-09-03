const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const homecontrol=require('../../controller/api/homecontrol');

router.use('/user',require('./user'));
router.use('/post',require('./post'));
router.use('/comment',require('./comment'));
router.use('/like',require('./like'));
router.use('/auth',require('./auth'));

router.get('/',function(req,res){
    return res.end("API");
});

module.exports=router;