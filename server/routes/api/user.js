const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const upload = require('../../config/multer');
const usercontrol=require('../../controller/api/usercontrol');
router.get("/find/:userid",usercontrol.getuser)
router.post("/update/:userid",upload.fields([{name:'coverphoto',},{name:'profilephoto'}]),usercontrol.update)
module.exports=router;