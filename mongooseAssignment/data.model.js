/**
 * Created by anurag on 6/4/17.
 */
let Mongoose = require('mongoose'),
connectionOne = require('./config/connection');
const userSchema = new Mongoose.Schema({
    _id:{
        type:Number,
        required:true,
    },
    student:{
        type:String
    },
    grade:{
        type:Number
    },
    assignment:{
        type:String
    }
},{ versionKey: false})

module.exports= connectionOne.model('assginment',userSchema);