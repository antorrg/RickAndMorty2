const {Router}=require('express');
const charRouter=require('./getRoutes');
const usersRouter=require('./usersRouter');


const mainRouter = Router();
const logRouter = Router();

mainRouter.use('/api', charRouter);

logRouter.use('/log', usersRouter);

module.exports= {mainRouter, logRouter};