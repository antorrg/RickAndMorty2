const LocalStrategy = require('passport-local').Strategy;
const User = require('../database');

const localStrategy = new LocalStrategy(
  (email, sub, done) => {
    // Aquí se verifican las credenciales del usuario en la base de datos
    // y llama a done con el usuario autenticado si las credenciales son válidas.
    // Por ejemplo:
    User.findOne({ email: email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Usuario no encontrado.' }); }
      if (!user.validPassword(sub)) { return done(null, false, { message: 'Contraseña incorrecta.' }); }
      return done(null, user);
    });
  }
);

module.exports = localStrategy;
