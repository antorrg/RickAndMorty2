const { verify } = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const verifyToken = (req, res, next) => {
  // Obtén el token del encabezado de la solicitud
  const token = req.headers['x-access-token'] || req.headers.authorization;

  // Verifica si el token está presente
  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
  }

  // Verifica el token
  verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    // Almacena el usuario decodificado en el objeto de solicitud para su uso posterior
    req.user = decoded;
    next();
  });
};

module.exports = { verifyToken };

// const { verify } = require('jsonwebtoken');
// const {User}= require('../database')
// require ('dotenv').config();
// const {SECRET_KEY} = process.env;

// const verifyToken = async (req, res, next) => {
//   // Obtén el token del encabezado de la solicitud
//   //const token = req.header('Authorization');
//  // const token=req.headers['x-access-token']
//  const token= req.headers(Authentication);

//   // Verifica si el token está presente
//   if (!token) {
//     return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
//   }
//   const decoded= verify(token, SECRET_KEY)
//   req.userid= decoded.id
//   const user= await User.findByPk(req.userid,{email:0});
//   if(!user){
//     return res.status(404).json({error: 'Usuario no encontrado'})
//   }
//   console.log(decoded);
//   req.user = decoded;

//   next();

// };

module.exports = { verifyToken };


// const verifyToken = async (req, res, next)=>{
//     const token=req.headers[x-access-token]
//     console.log(token+ ' yo soy el verify');
//     next();
// }
