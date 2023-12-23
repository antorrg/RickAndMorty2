const { sign } = require('jsonwebtoken');
require ('dotenv').config();
const {SECRET_KEY} = process.env;

const generateToken = (user) => {
  const secretKey = SECRET_KEY;
  const token = sign({ userId: user.id, email: user.email }, secretKey, { expiresIn:'1h' });
  return token;
};

module.exports = generateToken;
//* Esto es para el tiempo de expiracion: 
//* una hora: '1h'; un minuto: '1m'; un segundo: 1
//*En este ejemplo, el token expirará después de 30 segundos. Puedes ajustar ese valor según tus necesidades específicas. La opción expiresIn puede ser un número entero (que representa segundos) o una cadena en formato de duración, como '1h' para una hora o '2d' para dos días.