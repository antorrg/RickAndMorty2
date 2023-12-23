const {Router}=require('express');
const charRouter=require('./apiRoutes');
const usersRouter=require('./logRouter');



const mainRouter = Router();

mainRouter.use('/api', charRouter);


mainRouter.use('/log', usersRouter);

module.exports= mainRouter;