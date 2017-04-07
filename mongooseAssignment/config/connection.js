/**
 * Created by anurag on 6/4/17.
 */

let Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
/*Mongoose.connect('mongodb://anuragsharma.com/MongooseAssign?poolSize=4');

(()=>{
    Mongoose.connection.on('open',(err,data)=>{
        console.log('successfully connected');
    });
    Mongoose.connection.on('error',(err,data)=>{
        console.log('Error in connection ',err);
    })
})();*/

module.exports = connectionOne = Mongoose.createConnection('mongodb://anuragsharma.com/MongooseAssign');

connectionOne.on('connected', function() {
    console.log('Mongoose connected to connectionOne');
});

require('/home/anurag/Desktop/reactsession/mongooseAssignment/data.model');


