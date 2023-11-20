const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const conversationcontrol=require('../../controller/api/conversation');

router.post("/",conversationcontrol.newconv);
router.get("/:userid",conversationcontrol.getconv);
router.get('/find/:firstuser/:seconduser',conversationcontrol.findconv)
module.exports=router;