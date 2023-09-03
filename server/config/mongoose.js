const { connect } = require('mongoose');
const mongoose=require('mongoose');
mongoose.connect(process.env.mongodbString)
const db=mongoose.connection
db.on('error',console.error.bind(console,"Error in connecting to database"))
db.once('open',function(){
    console.log('successfull connected to database');
})
module.exports=db