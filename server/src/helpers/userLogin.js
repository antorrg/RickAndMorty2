
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json({ message: 'No autorizado' });
};

module.exports = { ensureAuthenticated };

// const crypto = require('crypto');

// const generateSecret = () => {
//   return crypto.randomBytes(32).toString('hex');
// };

// const secret = generateSecret();
// console.log(`La cadena secreta generada es: ${secret}`);
