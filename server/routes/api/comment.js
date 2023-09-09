const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const commentcontrol=require('../../controller/api/commentcontrol');
router.post('/',commentcontrol.create);
module.exports=router;