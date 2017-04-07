/**
 * Created by anurag on 6/4/17.
 */
let async = require('async');
let insertdata= require('./insertData')
let insertIntoAnotherDb = require('./check')


/*async.parallel([
    function(callback) {
        // do some stuff ...
        insertdata(insertIntoAnotherDb)
        //callback(null, insertdata());
    },

],function(err,results){
    if(err){
        console.log('error occured : ',err)
    }else{
        console.log(results)
    }
});*/




let tasks =[];
tasks.push(insertdata);

async.parallel(tasks,(err,result)=>{
    result[0]();
    console.log('----TASK COMPLETED-----')

})







