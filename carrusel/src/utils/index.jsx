import axios from 'axios';



const enviarInfoAlServer = async (userData) => {
    console.log(userData);
    
    
        const email = userData.email;
        const password= userData.password ?? null;
        const nickname = userData.nickname ?? null;
        const given_name = userData.given_name ?? null;
        const picture = userData.picture ?? null;
        const sub = userData.sub ?? null;
    
    
      try {
        const response = await axios.post('/log/login',{
            email,
            password,
            nickname,
            given_name,
            picture,
            sub,
          });
    
          if (response.status === 201) {
            const token = response.data.token;

            console.log(token)
            localStorage.setItem('authToken', token);

            console.log('Token recibido y almacenado:', token);
      
            console.log('Token recibido:', token);
           } if (response.data) {
            console.log(response.data)
            return response.data;
        
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
    enviarInfoAlServer,
   
};