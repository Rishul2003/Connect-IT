const mongoose=require('mongoose');
const likeSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId
        ,
        ref:'User'
    },
    likeable:{
        require:true,
        type:mongoose.Schema.Types.ObjectId,
        refPath:'OnModel'
    },
    OnModel:{
        type:String,
        required:true,
        enum:['Post','Comment']
    }


},{
    timestamps:true
})

const Like=mongoose.model('Like',likeSchema);
module.exports=Like;