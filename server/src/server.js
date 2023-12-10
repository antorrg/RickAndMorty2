const express = require('express');
const morgan =require('morgan');
const cors=require('cors');
const {mainRouter, logRouter} = require('./Routes/mainRoutes');



server=express();


server.use(cors());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','http://localhost:3000' ); // update to match the domain you will make the request from  'http://localhost:3000'
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
 

server.use(express.json());  
server.use('/', logRouter);
server.use('/', mainRouter);


module.exports=server;