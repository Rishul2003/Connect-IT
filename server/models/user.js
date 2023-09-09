const bcrypt=require('bcryptjs');
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    profilepic:{
        type:String
    },
    coverphoto:{
        type:String
    },
    friends:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]
    
},{
    timestamps:true
}); 
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) 
    {
        return next();
    }
    this.password=await bcrypt.hash(this.password, 12);
    next();
})

const user=mongoose.model('User',userSchema);
module.exports=user