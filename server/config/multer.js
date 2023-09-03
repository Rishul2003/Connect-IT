const {storage,cloudinary}=require('../config/cloudinary')
const multerfilter=function(req,file,cb){
    if((file.mimetype.split("/")[1]=='png') || (file.mimetype.split("/")[1]=='jpeg')||(file.mimetype.split("/")[1]=='jpg')){
        cb(null,true);
    }
    else{
        cb(null,false);
    }

}
const multer = require("multer");
const upload=multer({storage:storage,fileFilter:multerfilter});
module.exports=upload;
