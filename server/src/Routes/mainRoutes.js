const {Router}=require('express');
const userRouter=require('./getRoutes');
//const postUser=require('./postRoutes')

const mainRouter = Router();

mainRouter.use('/', userRouter);

//mainRouter.use('/post', postUser);

//mainRouter.use('/delete', deleteUser);

module.exports= mainRouter;