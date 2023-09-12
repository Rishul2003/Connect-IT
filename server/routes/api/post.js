const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const postcontrol=require('../../controller/api/postcontrol');
const upload = require('../../config/multer');
const passport = require('passport');


router.get("/",postcontrol.getpost);
router.delete("/:id",postcontrol.destroy)
router.post("/",upload.single('file'),postcontrol.createpost);
module.exports=router;