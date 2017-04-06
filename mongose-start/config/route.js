/**
 * Created by anurag on 6/4/17.
 */
let userController = require('./../api/users/user.controller')

module.exports= (app)=>{
    app.post('/user',userController.createUser);
    app.get('/user',userController.getUser);
    app.put('/user',userController.updateUser);
    app.delete('/user/:id',userController.deleteUser);
    app.get('/userAll',userController.findAllUser);
}