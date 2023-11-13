const {Router}=require('express');
const {getUsers,getUserById}= require('../handlers/userHandler')
const userRouter =Router();



userRouter.get('/character',getUsers );

userRouter.get('/character/:id', getUserById);

module.exports=userRouter;