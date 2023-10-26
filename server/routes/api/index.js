const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const homecontrol=require('../../controller/api/homecontrol');

router.use('/user',require('./user'));
router.use('/post',require('./post'));
router.use('/comments',require('./comment'));
router.use('/likes',require('./like'));
router.use('/auth',require('./auth'));
router.use('/friends',require('./friends'));
router.use("/conversation",require('./conversation'));
router.use("/message",require('./message'));

router.get('/',function(req,res){
    return res.end("API");
});

module.exports=router;