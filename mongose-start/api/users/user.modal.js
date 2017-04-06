let Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
   id:{
       type:Number,
       required:true,
   },
    userName:{
       type:String,
   },
    emailId:{
       type:String,
    }

})

module.exports=Mongoose.model('User',userSchema);