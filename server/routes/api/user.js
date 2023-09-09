const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const usercontrol=require('../../controller/api/usercontrol');
router.get("/find/:userid",usercontrol.getuser)

module.exports=router;