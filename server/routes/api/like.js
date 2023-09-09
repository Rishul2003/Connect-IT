const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const likecontrol=require('../../controller/api/likecontrol');
router.get("/",likecontrol.getlike);
router.post("/",likecontrol.toggle);
module.exports=router;