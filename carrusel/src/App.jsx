import {Landing, Detail }from './views/index';
import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import interceptor from './utils/AxiosInterceptor';
//import Favorites from './components/Favorites/Favorites'
import './App.css';
//axios.defaults.baseURL= 'https://jsonplaceholder.typicode.com';
axios.defaults.baseURL= 'http://localhost:3001';


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
      <Route path={'/detail/:id'} element ={<Detail/>}/>
      
    </Routes>
    
    </div>
  )
}

export default App
