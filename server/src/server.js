const express = require('express');
const morgan =require('morgan');
const cors=require('cors');
const {mainRouter, logRouter} = require('./Routes/mainRoutes');


// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const localStrategy = require('./helpers/localStrategy');
// const session = require('express-session');
// require ('dotenv').config();
// const {SECRET} = process.env

server=express();
// // Configuración de sesión
// server.use(session({
//   secret: SECRET,
//   resave: false,
//   saveUninitialized: false
// }));

// // Inicialización de Passport
// server.use(passport.initialize());
// server.use(passport.session());

// // Estrategia de autenticación local
// passport.use(localStrategy);

// // Serialización y deserialización de usuario
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   // Aquí deberías recuperar el usuario de la base de datos utilizando el ID
//   // Por ejemplo:
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });


server.use(cors());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','http://localhost:3000' ); // update to match the domain you will make the request from  'http://localhost:3000'
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
 

server.use(express.json());  
server.use('/', logRouter);
server.use('/', mainRouter);


module.exports=server;