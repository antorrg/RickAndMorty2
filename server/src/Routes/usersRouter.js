const {Router}=require('express');
const {favUsers, getUsers}= require('../handlers/protect/usersHandler')
const auth =require('../handlers/protect/postHandler')
const {charUsers}= require('../handlers/userHandler')
const { ensureAuthenticated } = require('../helpers/userLogin');

const usersRouter =Router();



//usersRouter.get('/favorite', favUsers );
usersRouter.get('/favorite', charUsers );

//usersRouter.post('/favorite/:id', addFav);
usersRouter.post('/login', auth);
usersRouter.get('/users', getUsers);


module.exports=usersRouter;