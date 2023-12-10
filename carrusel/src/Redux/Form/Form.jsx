import styles from './Form.module.css';
import { useState } from 'react';
import validation from '../validation';
import { enviarInfoAlServer } from '../../utils/Index'; // Asegúrate de ajustar la ruta

// Formulario para iniciar sesión
const Form = () => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await enviarInfoAlServer(userData);

      // Hacer algo con el usuario (por ejemplo, mostrar el nombre)
      console.log("Usuario recibido:", user);
    } catch (error) {
      console.error("Error al enviar la solicitud al servidor:", error);
      // Hacer algo con el error (por ejemplo, mostrar un mensaje de error)
    }
  }

  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit} className={styles.text}>

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="password">Password: </label>
        <input type="text" name='password' value={userData.password} onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
        <hr></hr>
        <p>(Datos de ingreso:) Email: "abs@gmail.com"; Pass: "123456".</p>
      </form>
    </div>
  );
}

export default Form;

// import styles from './Form.module.css';
// import {useState}from 'react';
// import validation from '../validation';
// //Formulario para iniciar sesión
// const Form = ({login}) => {
//     const [errors, setErrors] = useState({});
//     const [userData, setUserData] = useState({email:" ", password:"" });
//     const handleChange = (event) => {
//        setUserData({
//         ...userData,
//         [event.target.name]:event.target.value
//        })

//        setErrors(validation({...userData,
//          [event.target.name]: event.target.value 
//         }))
        
//     }
    
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       login(userData);
//     }
    
    
//     return (
//     <div className={styles.body}>
//     <form onSubmit={handleSubmit} className={styles.text}>
            
//             <label htmlFor="email">Email: </label>
//             <input type="email"name ="email" value={userData.email} onChange={handleChange}/>
//             {errors.email && <p>{errors.email}</p>}
               
//             <label htmlFor="password">Password: </label>
//             <input type="text" name = 'password' value={userData.password} onChange={handleChange}/>
//             {errors.password && <p>{errors.password}</p>}
//             <button>Submit</button>
//             <hr></hr>
//             <p>(Datos de ingreso:) Email: "abs@gmail.com"; Pass: "123456".</p>
//     </form>
//     </div>
//   );

// }

// export default Form;