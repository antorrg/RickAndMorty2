
## Sobre JWT (json web token)

La opción 'expiresIn' indica el tiempo de expiración del token. Actualmente, estás configurando el tiempo de expiración en '1h', que significa una hora. Para configurar el token para que dure un minuto, simplemente cambia '1h' a '1m' para indicar un minuto. Aquí está la modificación:
```javascript
const { sign } = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const generateToken = (user) => {
  const secretKey = SECRET_KEY;
  
  // Cambiado el tiempo de expiración a 1 minuto
  const token = sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1m' });
  
  return token;
};

module.exports = generateToken;

```
Ahora, el token generado expirará después de un minuto. Recuerda ajustar este valor según tus necesidades reales en un entorno de producción.

Tambien en jsonwebtoken, el tiempo de expiración (expiresIn) puede especificarse en segundos. Si deseas configurar el token para que dure, por ejemplo, 30 segundos, puedes hacerlo así:
```javascript
const { sign } = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const generateToken = (user) => {
  const secretKey = SECRET_KEY;

  // Cambiado el tiempo de expiración a 30 segundos
  const token = sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: 30 });
  
  return token;
};

module.exports = generateToken;

```
En este ejemplo, el token expirará después de 30 segundos. Puedes ajustar ese valor según tus necesidades específicas. La opción expiresIn puede ser un número entero (que representa segundos) o una cadena en formato de duración, como '1m' para un minuto, '1h' para una hora o '2d' para dos días