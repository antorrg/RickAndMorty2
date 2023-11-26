const {User}= require('../../database')

const signin = async (email, nickname, given_name, picture, sub, req, res) => {
  try {
    // Busca el usuario por el email
    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      // El usuario ya existe, envía un mensaje indicando que está autenticado
      const result = { isCreate: false,  user: existingUser };
      console.log(result+' usuario viejo ya')
      return result;
    } else {
      // El usuario no existe, créalo
      const [newUser, create] = await User.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          email,
          nickname,
          given_name,
          picture,
          sub,
        },
      });

      const result = { isCreate: create, user: newUser };
      console.log(result+' este es nuevito')
      return result;
    }
  } catch (error) {
    console.error("¡Algo malo pasó acá!", error);
    throw error;
  }
};

module.exports = signin;