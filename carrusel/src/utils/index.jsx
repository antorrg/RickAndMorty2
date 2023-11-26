import axios from 'axios';



const enviarInfoAlServer = async (userData) => {
    console.log(userData);
    
    
        const email = userData.email;
        const nickname = userData.nickname;
        const given_name = userData.given_name ?? null;
        const picture = userData.picture;
        const sub = userData.sub;
    
    
      try {
        const response = await axios.post('http://localhost:3001/log/login',{
            email,
            nickname,
            given_name,
            picture,
            sub,
          });
        
        if (response.data) {
            console.log(response.data.user.permissions)
            alert('Usuario autenticado/creado exitosamente');
            return response.data.user;
        
        } else {
           alert('Error al autenticar/crear usuario');
        }
    
    } catch (error) {
        alert('Error al enviar la solicitud al servidor', error);
    }
    
    
}


const accessInfo=(data)=>{
    if(data){
        return data.name;
    }
}
export {
    accessInfo,
    enviarInfoAlServer
};