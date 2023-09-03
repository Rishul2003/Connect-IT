const mongoose=require('mongoose');
const commentschema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    likes:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
    }
    ]
},{
    timestamps:true
})
const comments=mongoose.model('Comment',commentschema);
module.exports=comments;
