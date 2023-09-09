const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const friendcontrol=require('../../controller/api/friendcontrol');
router.post("/",friendcontrol.getfriend);
router.post("/toggle",friendcontrol.toggle);
module.exports=router;