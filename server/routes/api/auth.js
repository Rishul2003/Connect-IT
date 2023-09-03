const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const authcontrol=require('../../controller/api/authcontrol');
router.post('/register',authcontrol.register);
router.post('/login',authcontrol.login);
router.post('/logout',authcontrol.logout);
module.exports=router;