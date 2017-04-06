/**
 * Created by anurag on 6/4/17.
 */
let User = require('./user.modal')
exports.createUser=(userData,res)=>{
    User.create(userData,(err,data)=>{
        if(err){
            res.send({error:'Error occur at updating'})
        }
        else{
            res.send({message:"Data created at DB" ,user:data})
        }

    })
}
exports.findUser=(user,res)=>{
    User.findOne({"userName":user},(err,data)=>{
        if(err){
            res.send({error:'No user Finds'})
        }
        else{
            res.send({message:"User in Db" ,user:data})
        }
    })
}
exports.findAllUser=(res)=>{
    User.find((err,data)=>{
        if(err){
            res.send({error:'No user Finds'})
        }
        else{
            res.send({message:"User in Db" ,user:data})
        }
    })
}
exports.updateUser=(id,data,res)=>{
    var conditions = { 'id': id },
        update = {"userName": data.userName}
    User.update(conditions,update,(err,numAffected)=>{
        if(err){
            res.send({error:'No user Finds'})
        }
        else{
            res.send({message:"Updated sucessfully" ,affected:numAffected})
        }
    })

}
exports.deleteUser=(id,res)=>{
    var conditions = { 'id': id };
    User.remove(conditions,(err,numAffected)=>{
        if(err){
            res.send({error:'No user Finds'})
        }
        else{
            res.send({message:"Deleted  sucessfully" ,affected:numAffected})
        }
    })
}
/*

var conditions = { name: 'borne' }
    , update = { $inc: { visits: 1 }}
    , options = { multi: true };

Model.update(conditions, update, options, callback);

function callback (err, numAffected) {
    // numAffected is the number of updated documents
})*/
