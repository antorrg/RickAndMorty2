export default function validation({email, password}){
    const errors = {};
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    const regexPassN = /^(?=.*\d)$/;
    if(!regexMail.test(email)){
        errors.email = "Email incorrecto";
    }
    if(!email){
        errors.email = "debe ingresar un email";
    }
    if(email.length < 35){
        errors.email = "el email no debe superar los 35 caracteres";
    }
    if(!regexPassN.test(password)){
        errors.password = "La contraseña debe tener al menos un numero";
    }
    if(!regexPassS.test(password)){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }    
    return errors;

}
