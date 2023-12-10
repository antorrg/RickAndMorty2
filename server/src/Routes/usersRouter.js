const {Router}=require('express');
const {favUsers, getUsers}= require('../handlers/protect/usersHandler')
const {auth,updateUsersRol} =require('../handlers/protect/postHandler')
const {charUsers}= require('../handlers/userHandler')
const verifyToken=require('../helpers/verifyToken')

const usersRouter =Router();



//usersRouter.get('/favorite', favUsers );
usersRouter.get('/favorite', charUsers );

//usersRouter.post('/favorite/:id', addFav);
usersRouter.post('/login',auth);
usersRouter.get('/users',verifyToken, getUsers);
usersRouter.put('/users/:id', verifyToken, updateUsersRol)


module.exports=usersRouter;