const mongoose=require('mongoose');
const friendschema=mongoose.Schema({
    from_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    to_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
})
const Friendship=mongoose.model('Friendship',friendschema);
module.exports=Friendship;