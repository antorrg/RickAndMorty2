const {Router}=require('express');
const {favUsers2,favUsers, getUsers, addFav, deleteFav}= require('../handlers/logHandlers/usersHandler')
const {auth,updateUsersRol} =require('../handlers/logHandlers/loginPostHandler')
const verifyToken=require('../helpers/verifyToken')

const usersRouter =Router();

//?El endpoint de la ruta es /log/

//usersRouter.get('/favorite/user', verifyToken, favUsers );
usersRouter.get('/favorite', verifyToken, favUsers );
usersRouter.get('/favorite/verify', favUsers2)

usersRouter.post('/favorite', verifyToken, addFav);
usersRouter.post('/login',auth);
//usersRouter.post('/favorites',)
usersRouter.get('/users', getUsers);
usersRouter.put('/users/:id', verifyToken, updateUsersRol)
usersRouter.delete('/favorite/:id', verifyToken, deleteFav);


module.exports=usersRouter;