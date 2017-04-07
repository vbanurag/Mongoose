/**
 * Created by anurag on 7/4/17.
 */
let connectionOne = require('./config/connection');
Event = connectionOne.model('assginment');
let connectionTwo = require('./config/connectionForDb2');
eventTwo = connectionTwo.model('copyassignmnet');
let insertInto = require('./check')

module.exports=(insertIntoDB)=>{

    let fs = require('fs');
    let data = './app.json';

    fs.readFile(data, 'utf8', function(err, contents) {
        let _data = JSON.parse(contents)
            Event.create(_data,(err,data)=>{
                if(err){
                    console.log('Error occur at creation')
                }
                else{
                    console.log('Insertion successfully')
                    insertInto();
                }
            })
    });
}