const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    content:{
        type:String,
    },
    user:{
       type: mongoose.Schema.Types.ObjectId,
       ref:'User'
    },
    image:{
        type:String
    }
    //include the array of comment in post for easily accessible

    ,comments:[
        {
            type:mongoose.Schema.Types.ObjectId
            ,
            ref:'Comment'
        }
    ],
    likes:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
    }
    ]
},{
    timestamps:true
})
const Post=mongoose.model('Post',postschema);
module.exports=Post;