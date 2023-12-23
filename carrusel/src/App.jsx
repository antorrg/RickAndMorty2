import {Landing, Detail }from './views/index';
import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import interceptor from './utils/AxiosInterceptor';



function App() {
  const { logout } = useAuth0();

  useEffect(() => {
    // Configurar el interceptor cuando el componente se monta
    interceptor(logout);
  }, []);
 

  return (
    <div>
    <Routes>
      <Route path={'/'} element= {<Landing/>}/>
      <Route path={'/:name'} element = {<Landing/>}/>
      <Route path={'/detail/:id'} element ={<Detail/>}/>
      
    </Routes>
    
    </div>
  )
}

export default App
