const {User}= require('../../database')
const {generateToken} = require('../../helpers/middlewares');

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
        // Genera el token
        const token = generateToken(existingUser);
        console.log(token)

        // Agrega el token al encabezado de la respuesta
        if (res && res.header) {
          res.headers('authorization', `Bearer ${token}`);
          console.log('Encabezado Authorization establecido:', res.get('authorization'));
        }
        //res.headers('Authorization', `Bearer ${token}`);
  
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
      // Genera el token
      const token = generateToken(newUser);
      console.log(token)

      // Agrega el token al encabezado de la respuesta
      if (res && res.header) {
        res.header('authorization', `Bearer ${token}`);
      }
     

      return result;
    }
  } catch (error) {
    console.error("¡Algo malo pasó acá!", error);
    throw error;
  }
};

const userUpd= async(id, role)=>{
  try {
    // Verificar si el usuario existe
    const user = await User.findByPk(id);
    console.log(user)
    if (!user) {
      return { error: "Usuario no encontrado" };
    }

    console.log("Nuevo rol (antes de la conversión):", rol);

    //Convertir newRol a número antes de actualizar
    const parsedNewRol = parseFloat(role.role);
    console.log(parsedNewRol + " este es del controller");
    if (isNaN(parsedNewRol)) {
      return { error: "El nuevo rol no es un número válido" };
    }
    await user.update({ permissions: parsedNewRol });
    return user;
  } catch (error) {
    console.error("Error al actualizar el rol:", error);
    return { error: "Error interno del servidor" };
  }
};


module.exports = {
  signin,
  userUpd,
};