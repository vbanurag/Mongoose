/**
 * Created by anurag on 7/4/17.
 */
/**
 * Created by anurag on 6/4/17.
 */
let Mongoose = require('mongoose'),
    connectionTwo = require('./config/connectionForDb2');

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

module.exports = connectionTwo.model('copyassignmnet',userSchema);