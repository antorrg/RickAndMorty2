const {Router}=require('express');
const {charUsers,charUserById}= require('../handlers/userHandler');
const verifyToken =require('../helpers/verifyToken')
const charRouter =Router();



charRouter.get('/character', charUsers );

charRouter.get('/character/:id', verifyToken, charUserById);

module.exports=charRouter;