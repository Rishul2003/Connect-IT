const mongoose=require('mongoose');
const MessageSchema=new mongoose.Schema({
        conversationid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Conversation'
        },
        sender:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
        ,
        text:{
            type:String
        }
    
},{timestamps:true})

const Message=mongoose.model('Message',MessageSchema);
module.exports=Message;