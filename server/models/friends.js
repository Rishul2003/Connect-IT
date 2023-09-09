const mongoose=require('mongoose');
const friendschema=new mongoose.Schema({
    from_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    to_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    friend:{
        type:Boolean,
        require:true

    }
},{
    timestamps:true
})
const Friendship=mongoose.model('Friendship',friendschema);
module.exports=Friendship;