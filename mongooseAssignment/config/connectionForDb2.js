/**
 * Created by anurag on 7/4/17.
 */
let Mongoose = require('mongoose');

/*
Mongoose.createConnection('mongodb://anuragsharma.com/assignDb?poolSize=4');

exports.createConn = ()=>{
    Mongoose.connection.once('open',(err,data)=>{
        console.log('successfully connected to DB 2');
    });
    Mongoose.connection.on('error',(err,data)=>{
        console.log('Error in connection ',err);
    })
}*/
//var connectionTwo = Mongoose.createConnection('mongodb://anuragsharma.com/assignDb');


module.exports = connectionTwo =Mongoose.createConnection('mongodb://anuragsharma.com/assignDb');

connectionTwo.on('connected', function() {
    console.log('Mongoose connected to connectionTwo');
});

require('/home/anurag/Desktop/reactsession/mongooseAssignment/data.another.model');