const {Router}=require('express');
const {charUsers,charUserById}= require('../handlers/userHandler')
const charRouter =Router();



charRouter.get('/character', charUsers );

charRouter.get('/character/:id', charUserById);

module.exports=charRouter;