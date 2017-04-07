/**
 * Created by anurag on 7/4/17.
 */
let connectionOne = require('./config/connection');
Event = connectionOne.model('assginment');
let connectionTwo = require('./config/connectionForDb2');
eventTwo = connectionTwo.model('copyassignmnet');



module.exports=()=>{
    let query = Event.find({})
    let arr =[];
    query.cursor().on('data',(data)=>{
        arr.push(data);
        if(arr.length==20){
            for(var i in arr){
                let obj = {
                    '_id':arr[i]._id,
                    "student":arr[i].student,
                    "grade":arr[i].grade,
                    "assignment":arr[i].assignment
                }
                eventTwo.create(obj,(err,res)=>{
                    if(err){
                        console.log('error at insertion',err)
                    }
                    else{
                        console.log('insertDataIntoAnother-----',res)
                    }
                })

            }

        }
    })
    return true;
}