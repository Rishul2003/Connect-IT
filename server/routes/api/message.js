const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const messagecontrol=require("../../controller/api/message");

router.post("/",messagecontrol.add);
router.get("/:conversationid",messagecontrol.check);


module.exports=router;